from __future__ import with_statement
from slackclient import SlackClient
import os, time, json, requests, re


slack_token = os.environ.get('SLACK_TOKEN')
if slack_token == None:
   print 'Please obtain a valid bot key.'
   exit()

slack_client = SlackClient(slack_token)

siginfo = [
	["Android", "TBD", "TBD"],
	["Algorithm Fight Club", "Thursday 7-8pm", "Lafferre C2205"],
	["Cyber Security", "Mondays 5-6pm", "Naka 222"],
	["Game Dev", "Tuesdays 7-8pm", "Lafferre C1205"],
	["Git", "Tuesdays 5-6pm", "Naka 222"],
	["Interview Prep", "Tuesdays 6-7pm", "Naka 222"],
	["Intro to Programming Concepts", "Mondays 6-7pm", "Lafferre C1205"],
	["Machine Learning", "Tuesdays 8-9pm", "TBD"],
	["Swift", "Thursdays 5-6pm", "RJI Building 042"],
	["UX Design", "Wednesdays 5-6pm", "Naka 222"],
	["Web Dev", "Wednesdays 7-8pm", "RJI Building 042"]
]
channels = {
	"general": "C0K2AGL7Q",
	"Cyber Security SIG": "C0L3ASEBS",
	"Machine Learning SIG":"C6XLFD4B1",
	"Game Dev SIG": "C0KC84SHM",
	"Web Dev SIG": "C0KMU20RE",
	"Swift SIG": "C0KMQ3CKV",
	"Interview Prep SIG": "C6SAVCQ9X",
	"Algorithm Fight Club": "C0KJGKZ6Y",
	"Android SIG": "C281ZR50D",
	"Git SIG": "C8TU7TMDW",
	"Intro to Programming Concepts SIG": "C8WPNTX9S",
	"UX Design SIG": "C0KTDMVEV"
}

def notification_history():
   updates = {}
   base_url = 'https://slack.com/api/channels.history?token=' + slack_token

   for channel, code in channels.iteritems():

      request_url = base_url + '&channel=' + code
      r = requests.get(request_url)
      r_json = json.loads(r.text)
      updates[channel] = get_valid_messages(r_json)

   return updates

# Scope to channel mentions and limit to most recent 4 posts
def get_valid_messages(raw_messages):
   post_messages = []
   for message in raw_messages['messages']:

      if '<!channel>' in message['text']:
         message["ts_day"] = time.strftime("%a %B %d, %Y", time.localtime(float(message['ts']))).replace(" 0", " ")
         message["ts_time"] = time.strftime("%I:%M %p", time.localtime(float(message['ts']))).replace(" 0", " ")

         if len(post_messages) > 4:
            return post_messages
         else:
            parse_message(message['text'])
            message['text'] = parse_message(message['text'])
            post_messages.append(message)

   return post_messages

def parse_message(message):
   message = message.rsplit('<!channel>')[1]
   new_message = []

   if len(message) and message[0] == ":":
      message = message[1:]

   for word in message.split(' '):
      if "<http" in word:

         new_word = word.split('//')[1]
         if "|" in new_word:
            new_word = new_word.split("|")[0]
         new_word = new_word.split(">")[0]

         link_word = "(<a target = '_' href='http://" + new_word + "'>" + new_word +"</a>)"

         if word[-1] == ",":
            link_word += ","
         new_message.append(link_word)

      elif "<mailto" in word:
         new_word = word.split('|')[1].split('>')[0]
         new_message.append(new_word)

      elif len(word) > 0 and word[0] == ":" and word[-1] == ":":
         continue

      else:
         new_message.append(word)

   return " ".join(new_message)
