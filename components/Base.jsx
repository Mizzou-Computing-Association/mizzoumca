import React from 'react';

class Base extends React.Component {
	constructor() {
		super();

		this.showLogin = this.showLogin.bind(this);
	}

	showLogin() {
		alert('click!')
	}

	render() {
		return (
			<div>
            <nav>
               <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">Logo</a>
                  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Test</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                  </ul>
                  <ul className="side-nav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                  </ul>
                </div>
            </nav>



				<footer className="page-footer #263238 blue-grey darken-4 ">
					<div className="container ">
						<div className="row">
							<div className="col s6">
								{/* <img src="../static/images/mcalogo-notext.png" class = "logo-wrapper"> */}
							</div>
							<div className="col s6">
								<p className="grey-text text-lighten-4">
									Find other ways to get involved through the <br/>
									IEEE and MU Department of Engineering.
								</p>
								<h5 className="white-text">Resources</h5>
								<ul>
									<li><a className="grey-text text-lighten-3" href="https://www.facebook.com/groups/MizzouACM/">MCA Facebook</a></li>
									<li><a className="grey-text text-lighten-3" href="http://hackmizzou.com/" target="_">Hack Mizzou</a></li>
									<li><a className="grey-text text-lighten-3" href="http://engineering.missouri.edu/cs/">MU Department of Computer Science</a></li>
									<li><a className="grey-text text-lighten-3" href="http://engineering.missouri.edu/">MU Engineering</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							© 2017 Mizzou Computing Association
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Base;