import React from 'react';

class Landing extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		//adds the landing-movie.js to only this component, as it's only needed here
		const script = document.createElement("script");

		script.src = "../static/landing-movie.js";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return (
			<div>
				<div className="se-preload-con"></div>
				<div className="overlay"></div>
				<div className="cover">
					<div className="hi">
						<h1 id="landingtxt">Welcome</h1>
						<p>to the</p>
						<h1>Mizzou Computing Association</h1>
						<br />
						<span id="btn-transparent">
							<div
								className="waves-effect waves-light btn-large btn-left"
								onClick={this.props.showBase}
							>See What's New</div>
						</span>
						<div
							className="waves-effect waves-light btn-large btn-right modal-trigger"
							onClick={this.props.showRegister}
						>Join Us</div>
					</div>
				</div>
				<div className="tv">
					<div className="screen mute" id="tv"></div>
				</div>
			</div>
		);
	}
}

export default Landing;