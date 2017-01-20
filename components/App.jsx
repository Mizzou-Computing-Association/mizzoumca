import React from 'react';

import TempLanding from './TempLanding.jsx';
import Register from './Register.jsx';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			show: 'landing',
		};

		this.showBase = this.showBase.bind(this);
		this.showLanding = this.showLanding.bind(this);
		this.showRegister = this.showRegister.bind(this);
	}

	showBase() {
		this.setState({
			show: 'base',
		})
	}

	//is it even possible to return to the landing page? And do we need that?
	showLanding() {
		this.setState({
			show: 'landing',
		})
	}

	showRegister() {
		this.setState({
			show: 'register',
		})
	}

	render() {
		let display;
		if (this.state.show === 'landing') {
			display = (
				<TempLanding showBase={this.showBase} showRegister={this.showRegister}/>
			)
		}
		else if (this.state.show === 'base') display = <Base />
		else if (this.state.show === 'register') display = <Register />

		return display;
	}
}

export default App;