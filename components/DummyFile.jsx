//I will outline the basic structure of React in this file
//contents are taken and modified from my 2830 final project

import React from 'react';

import SomeComponent from './some/path/Component.jsx'
import AlertComponent from './some/path/Alert.jsx'
import Login from './some/path/Login.jsx';
import Home from './some/path/Home.jsx';

class DummyFile extends React.Component {
	//javascript functions will go here
	//the render function is always last & constructor is always first out of convention

	//the constructor function must be named as so. It can take in the props variable.
	//props is an object containing everything that is passed to this class.
	constructor(props) {
		super(props); //calls the parent constructor, must be called before using 'this'

		//initializing this.state, a dictionary object used to dynamically change the view in React.
		this.state = {
			alert: false,
			msg: '',
			loggedIn: false,
		};

		//You must bind 'this' to functions you create so they can use it
		this.checkForLogin = this.checkForLogin.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.hideAlert = this.hideAlert.bind(this);
		this.showHome = this.showHome.bind(this);
		this.showLogin = this.showLogin.bind(this);
	}

	//overrides React.Component's componentWillMount()
	//runs right before the render function
	componentWillMount() {
		if(!this.checkForLogin())
			this.showLogin();
		else
			this.showHome();
	}

	checkForLogin() {
		var logged;
		//jquery's ajax call would be here and set the logged variable appropriately
		$.ajax({ ... });

		return logged;
	}

	showAlert(str) {
		//this.setState must be called to properly change the state of a component
		//it sets in motion the changing of this.state and eventually rerenders the view.
		//its important to note that setState is asynchronous... Not knowing this caused me SO many issues
		this.setState({
			alert: true,
			msg: str,
		})
	}

	hideAlert() {
		this.setState({alert: false})
	}

	showHome() {
		this.setState({loggedIn: true});
	}

	showLogin() {
		this.setState({loggedIn: false});
	}

	//the render function must be named as so, it is invoked by React to render the view.
	render() {
		//you can use a javascript variable and state to update the view.
		//when state changes, render() is reexecuted, and so display is reassigned
		//Home and Login components are imported components, they would contain more HTML and styling
		let display;
		if (this.state.loggedIn) {
			display = (
				<Home
					showLogin={this.showLogin}
					verify={this.checkForLogin}
					alert={this.showAlert}
				/>
			)
		} else {
			display = (
				<Login
					showHome={this.showHome}
					alert={this.showAlert}
				/>
			)
		}

		//render() MUST have a return function! What gets returned must be contained in a single node
		//If you have multiple elements to return, wrap them all in one tag, like I did with the <div>.
		//everything returned is what you see in the view.
		return (
			<div>
				{/*
					If you're inside a tag, everything inside {} is javascript.
					You can't use <!-- --> to comment inside a tag with React.
					Instead, you need to intitate javascript and then use block or line comments.
					If you want to add a JS function as a child to a tag, use {}.
				*/}

				{ display }

				<p>
					This is a paragraph. Yes, EXACTLY like an HTML paragraph. You can write straigh HTML
					here and it will all be compiled down into JavaScript for you! This is what makes
					React syntax so amazing and easy to write/read.
				</p>
				<br /> {/* All tags that have no closing tag MUST end in /> or ERRORS!! */}

				{/*
					The stuff inside the AlertComponent brackets < /> is props.
					The keyword arguments open, message, etc are put into the props object
					which is passed to the AlertComponent object.
					To access the values of 'open' inside of the AlertComponent class for example,
					you would simply use: this.props.open
					NOTE: props are camelCase by convention
				*/}
				<AlertComponent
					open={this.state.alert}
					message={this.state.msg}
					autoHideDuration={4000}
					onRequestClose={this.hideAlert}
				/> {/* onRequestClose's value is a callback, a function passed as a parameter. */}
			</div>
		);
	}
}

export default DummyFile; //Dont forget this or you can't import the class!