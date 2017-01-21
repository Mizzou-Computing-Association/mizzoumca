import React from 'react';

class TempLanding extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
           <nav className="nav navbar-fixed blue-grey darken-4" role="navigation">
             <div className="nav-wrapper container "><a id="logo-container" href="#" className="brand-logo center">MCA</a>
             </div>
           </nav>
         <div className="section no-pad-bot" id="index-banner">
            <div className="container  blue-grey-text text-darken-4">
               <br/><br/>
               <h1 className="header center welcome">Welcome</h1>
               <p className="center "><i>to the</i></p>
               <h1 className="header center welcome">Mizzou Computing Association</h1>

               <div className="row center">
                 <h5 className="header col s12 ">The University of Missouri's premier technology organization</h5>
               </div>
               <div className="row center">
                 <img className="logo-img fadeInRight" src = "../static/images/mcalogo-notext.png"></img>
               </div>
               <div className="row center">
                  <a
                  onClick = {this.props.showRegister}
                  id="register-button"
                  className="btn-large waves-effect waves-light join-us z-depth-2">Join Us
                  </a>
               </div>
               <br/><br/>
            </div>
         </div>
           <div className="container " >
             <div className="section" id = "club-info">

               <div className="row">
                 <div className="col s12 m6">
                     <div className="card blue-grey darken-4 z-depth-1 center">
                        <div className="card-content ">
                           <span className="card-title">Our First 2017 Meeting</span>
                           <div className="divider"></div>
                           <p className="info center">Join us for our first meeting of the semester <br/>Thursday, Janurary 26th from 6-8pm <br/>Naka Hall (EBW) 102 <br/><br/>There will be free pizza!</p>
                        </div>
                     </div>
                 </div>
                 <div className="col s12 m6">
                     <div className="card blue-grey darken-4 z-depth-1 center">
                        <div className="card-content ">
                           <span className="card-title">Special Interest Groups</span>
                           <div className="divider"></div>
                           <p className="info center">Special Interest Groups being offered this year<br/>
                              -Algorithm Fight Club<br/>
                              -iOS Development<br/>
                              -Game Dev & VR<br/>
                              -Volunteering<br/>
                              -Android<br/>
                              -Web Dev
                              </p>
                        </div>
                     </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col s12 m6">
                     <div className="card blue-grey darken-4 z-depth-1 center">
                        <div className="card-content ">
                           <span className="card-title">Contact</span>
                           <div className="divider"></div>
                           <p className="info center">Questions? Thoughts? Reach out to us via email: <br/> mizzoumca@gmail.com</p>
                        </div>
                     </div>
                 </div>
                 <div className="col s12 m6">
                     <div className="card blue-grey darken-4 z-depth-1 center">
                        <div className="card-content">
                           <span className="card-title">Membership</span>
                           <div className="divider"></div>
                           <p className="info center">To become a new member (or renew) fill out the quick form by clicking join above<br/><br/> To recieve funding for trips or run for officer positions, attend three meetings per semester</p>
                        </div>
                     </div>
                 </div>
               </div>
               <div className="row">
                  <div className="col s12 center">
                     <iframe className = "calendar" src="https://calendar.google.com/calendar/embed?src=hqu555vd8tugn2nnb7msi67rgs%40group.calendar.google.com&ctz=America/Chicago" ></iframe>
                  </div>
               </div>
             </div>
             <br/><br/>
             <div className="section">
             </div>
           </div>
         </div>
      );
   }
}

export default TempLanding;







