import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class FooterTemplate extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1}>
          <Link to="/">Home</Link>
        </li>,
        <li key={2}>
          <Link to="dashboard">Dashboard</Link>
        </li>,
        <li key={3}>
          <Link to="logout">Logout</Link>
        </li>,
      ];
    } else {
      return [
        // Unauthenticated navigation
        <li key={1}>
          <Link to="/">Home</Link>
        </li>,
        <li key={2}>
          <Link to="login">Login</Link>
        </li>,
        <li key={3}>
          <Link to="register">Register</Link>
        </li>,
      ];
    }
  }

  render() {
    const d = new Date();
    const year = d.getFullYear();

    return (
            <footer id="mt-footer" class="style1 wow fadeInUp" data-wow-delay="0.4s">
               
               <div class="footer-holder dark">
                  <div class="container">
                     <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
                           
                           <div class="f-widget-about">
                              <div class="logo">
                                 <a href="index.html"><img src={"./../../public/images/logo.png"} alt="Schon" /></a>
                              </div>
                              <p>Exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              
                              <ul class="list-unstyled social-network">
                                 <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                 <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                 <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                 <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                 <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                              </ul>
                              
                           </div>
                           
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
                           <div class="f-widget-news">
                              <h3 class="f-widget-heading">Twitter</h3>
                              <div class="news-articles">
                                 <div class="news-column">
                                    <i class="fa fa-twitter"></i>
                                    <div class="txt-box">
                                       <p>Laboris nisi ut <a href="#">#schön</a> aliquip econse- <br />quat. <a href="#">httpst.co/vreNJ9nEDt</a></p>
                                    </div>
                                 </div>
                                 <div class="news-column">
                                    <i class="fa fa-twitter"></i>
                                    <div class="txt-box">
                                       <p>Ficia deserunt mollit anim id est labo- <br />rum. incididunt ut labore et dolore <br /><a href="#">https://t.co/vreNJ9nEDt</a></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomxs">
                           
                           <div class="f-widget-tabs">
                              <h3 class="f-widget-heading">Product Tags</h3>
                              <ul class="list-unstyled tabs">
                                 <li><a href="#">Sofas</a></li>
                                 <li><a href="#">Armchairs</a></li>
                                 <li><a href="#">Living</a></li>
                                 <li><a href="#">Bedroom</a></li>
                                 <li><a href="#">Lighting</a></li>
                                 <li><a href="#">Tables</a></li>
                                 <li><a href="#">Pouf</a></li>
                                 <li><a href="#">Wood</a></li>
                                 <li><a href="#">Office</a></li>
                                 <li><a href="#">Outdoor</a></li>
                                 <li><a href="#">Kitchen</a></li>
                                 <li><a href="#">Stools</a></li>
                                 <li><a href="#">Footstools</a></li>
                                 <li><a href="#">Desks</a></li>
                              </ul>
                           </div>
                           
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 text-right">
                          
                           <div class="f-widget-about">
                              <h3 class="f-widget-heading">Information</h3>
                              <ul class="list-unstyled address-list align-right">
                                 <li>
                                    <i class="fa fa-map-marker"></i>
                                    <address>Connaugt Road Central Suite 18B, 148 <br />New Yankee</address>
                                 </li>
                                 <li><i class="fa fa-phone"></i><a href="tel:15553332211">+1 (555) 333 22 11</a></li>
                                 <li><i class="fa fa-envelope-o"></i><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;">&#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;</a></li>
                              </ul>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
           
               <div class="footer-area">
                  <div class="container">
                     <div class="row">
                        <div class="col-xs-12 col-sm-6">
                           <p>© <a href="index.html">schön.</a> - All rights Reserved</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 text-right">
                           <div class="bank-card">
                              <img src={"./../../public/images/bank-card.png"} alt="bank-card" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </footer>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(FooterTemplate);
