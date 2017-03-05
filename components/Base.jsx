import React from 'react';

class Base extends React.Component {
	constructor() {
		super();
      console.log('in this controler');
		this.showLogin = this.showLogin.bind(this);
	}

	showLogin() {
		alert('click!')
	}

	render() {
		return (
			<div>
            <nav>
             <div className="nav-wrapper" id = "cssnav">
               <a href="#!" className="brand-logo center hide-on-large-only">MCA</a>
               <a href="#" data-activates="mobile-demo" className="button-collapse"><i id = "menu" className="material-icons">menu</i></a>
               <ul className="left hide-on-med-and-down">
                 <li><a className="waves-effect waves-yellow btn-flat nav-bttn" href="#">Home</a></li>
                 <li><a className="waves-effect waves-yellow btn-flat nav-bttn" href="#">SIGs</a></li>
                 <li><a className="waves-effect waves-yellow btn-flat nav-bttn" href="#">Members</a></li>
                 <li><a className="waves-effect waves-yellow btn-flat nav-bttn" href="#">Resources</a></li>
               </ul>
               <ul className ="right hide-on-med-and-down r-panel">
                  <li><a className="social-icon" href="https://twitter.com/mizzoumca" target="_"><img className = "social-img" src="static/images/Twitter.svg"/></a></li>
                  <li><a className="social-icon" href="https://www.facebook.com/mizzouhackers/" target="_"><img className = "social-img" src="static/images/facebook.svg"/></a></li>
                  <li><a className="social-icon" href="https://www.instagram.com/mizzoumca/" target="_"><img className = "social-img" src="static/images/instagram.svg" /></a></li>
                  <li><a className="nav-logo"><img className = "img-logo" src="static/images/mcalogo-notext.png"/></a></li>
               </ul>
               <ul class="side-nav" id="mobile-demo">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">SIGs</a></li>
                 <li><a href="#">Members</a></li>
                 <li><a href="#">Resources</a></li>
               </ul>
             </div>
           </nav>

            <footer className="page-footer">
                  <div className="row">
                  <div className="col s5 offset-s1 footer-col">
                       <div className="row">
                       <p className = "content">Sign up for our mailing list to stay up to date on events and news:</p>
                           <form className="col s12" method="GET">
                              <div className="row email-input z-depth-1">
                                 <div className=" input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                    <label for="email" data-error="wrong" data-success="right">Email</label>
                                    <div className = "right-align">
                                    <button className="btn  red waves-effect waves-yellow" type="submit" name="action">Submit
                                       <i className="material-icons right">send</i>
                                    </button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                  </div>
                  <div className="col s5 offset-s1">
                      <p className="grey-text text-lighten-4">Find other ways to get involved with Computer Science at MU</p>
                      <h5 className="white-text">Resources</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="http://hackmizzou.com/" target="_">Hack Mizzou</a></li>
                        <li><a className="grey-text text-lighten-3" href="http://engineering.missouri.edu/cs/" target="_">MU Department of Computer Science</a></li>
                        <li><a className="grey-text text-lighten-3" href="http://engineering.missouri.edu/" target="_">MU Engineering</a></li>
                      </ul>
                     <ul id ="footersm">
                        <li><a className="social-icon" href="https://twitter.com/mizzoumca" target="_"><img className = "social-img" src="static/images/Twitter.svg"/></a></li>
                        <li><a className="social-icon" href="https://www.facebook.com/mizzouhackers/" target="_"><img className = "social-img" src="static/images/facebook.svg"/></a></li>
                        <li><a className="social-icon" href="https://www.instagram.com/mizzoumca/" target="_"><img className = "social-img" src="static/images/instagram.svg"/></a></li>
                     </ul>
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