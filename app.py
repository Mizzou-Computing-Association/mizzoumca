import os
from flask import Flask, Blueprint, abort, flash, redirect, render_template, request, url_for
import slack


app = Flask(__name__)
updates = slack.notification_history()

@app.route('/landing')
def landing_view():
   return render_template('landing.html')

@app.route('/')
def home():
   return render_template('home.html', updates=updates)

@app.route('/sigs')
def sigs():
   r = dict(updates)
   del r['general']
   return render_template('sigs.html', updates=r)

@app.route('/register')
def register():
   return render_template('register.html')

@app.route('/contact')
def contact():
   return render_template('contact.html')

if __name__ == '__main__':

    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)