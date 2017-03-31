import os
from flask import Flask, Blueprint, abort, flash, redirect, render_template, request, url_for
import slack


app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
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


#
# livereload server
#
from livereload import Server, shell
from formic import FileSet
from os import getcwd, path

def make_livereload_server(wsgi_app):
    server = Server(wsgi_app)

    watch_patterns = (
        "/templates/*",
        "/static/**"
    )

    build_cmd = "make static"

    print "Files being monitored:"

    cwd = getcwd()

    for pattern in watch_patterns:
        print "Pattern: ", pattern
        for filepath in FileSet(include=pattern):
            print "=>", path.relpath(filepath, cwd)
            server.watch(filepath, build_cmd)
        print

    return server

import logging

def main():
    # wire livereload to Flask via wsgi
    flask_wsgi_app = app.wsgi_app
    server = make_livereload_server(flask_wsgi_app)
    # serve application
    server.serve()


if __name__ == '__main__':
    main()

