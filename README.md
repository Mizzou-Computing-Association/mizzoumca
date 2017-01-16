# Configuration

- Download all dependencies by running `$ pip install -r requirements.txt`

- Obtain a slack bot key and configure it with your environment.
`$ export SLACK_TOKEN='your slack token pasted here`


# Usage
To run server locally, run `$ python app.py` and open port 5000

# **React**
Currently the React version of this site is half completed. The landing page works fine, save for the tetris loading screen that doesn't display long enough. Clicking on either button works. When viewing the main page, no slack data will be displayed as it hasn't been integrated yet, this will go where 'Stuff' is shown.

The previous way to setup and run the server works like it did before. I havent altered those files so the 'full' site as it was previously is unchanged. To run the React version do the following...

### Configuration

- Download all pip dependencies by running `$ pip install -r requirements.txt`
- Download all npm dependencies by running `$ npm install`
- If you want to setup the development environment, you need to be able to transpile the React ES6 into JavaScript. Babel is used for this, run the following:
-- `$ npm install babel babel-core babel-loader babel-preset-es2015 babel-preset-react`
-- `$ npm install webpack-dev-server`
### Usage
To run server locally, run `$ npm start` and open port 5000