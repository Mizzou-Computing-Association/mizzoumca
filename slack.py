from __future__ import with_statement
from slackclient import SlackClient
import os, time, json, requests


slack_token = os.environ.get('SLACK_TOKEN')
if slack_token == None:
   print 'Please obtain a valid bot key.'
   exit()

slack_client = SlackClient(slack_token)


channels = {"general": "C0K2AGL7Q" , "sig-cyber-security": "C0L3ASEBS", "sig-game-dev_vr": "C0KC84SHM", "sig-swift": "C0KMQ3CKV", "sig-web-dev": "C0KMU20RE", "cyber-security-sig" : "C03NTBM49", "algorithm-fight-club": "C0KJGKZ6Y"}

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
            message['text'] = message['text'].split('>')[1]
            if message['text'][0] == ":":
               message['text'] = message['text'][1:]
            post_messages.append(message)

   return post_messages
