import os
from flask import Flask, Blueprint, abort, flash, redirect, render_template, request, url_for
import slack

bp = Blueprint('bp', __name__, template_folder='./')
updates = slack.notification_history()

@bp.route('/')
def landing_view():
   return render_template('index.html')

@bp.route('/home')
def home():
   return render_template('base-demo.html', updates=updates)

@bp.route('/sigs')
def sigs():
   r = dict(updates)
   del r['general']
   return render_template('sigs.html', updates=r)

@bp.route('/register')
def register():
   return render_template('register.html')

@bp.route('/contact')
def contact():
   return render_template('contact.html')

app = Flask(__name__)
app.register_blueprint(bp)
if __name__ == '__main__':

    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

