from __future__ import with_statement
from slackclient import SlackClient
import os, time, json, requests


# slack_token = 'xoxb-106818627829-iAYNfcKWW6EzGNXkB6K5GL6G'


try:
    with open( "bot-key.txt" ) as f :
        slack_token=  str(f.readlines()[0])
except EnvironmentError:
    print 'Please obtain a valid bot key.'

slack_client = SlackClient(slack_token)


def notification_history():
   messages = []
   request_url = 'https://slack.com/api/channels.history?token=' + slack_token + '&channel=C0K2AGL7Q'
   r = requests.get(request_url)
   r_json = json.loads(r.text)

   for message in r_json['messages']:
      if message['text'].split('>')[0][1] == '!' or message['text'].split('>')[0][1] == '@':
         message['text'] = message['text'].split('>')[1]
         messages.append(message)
      else:
         messages.append(message)

   return messages

