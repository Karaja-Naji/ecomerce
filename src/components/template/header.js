import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CartOpener from './cartOpener'

class HeaderTemplate extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={`${1}header`}>
          <Link to="/">Home</Link>
        </li>,
        <li key={`${2}header`}>
          <Link to="dashboard">Dashboard</Link>
        </li>,
        <li key={`${3}header`}>
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
        const headerStyle = {
            
              backgroundImage: 'url(./../../public/images/img11.jpg )',
            };

    return (

           <header id="mt-header" class="style4">
               
               <div class="mt-bottom-bar">
                  <div class="container-fluid">
                     <div class="row">
                        <div class="col-xs-12">

                          <div class="mt-logo">
                            <a href="#">
                              <img src={'./../../public/images/mt-logo.png'} />
                            </a>
                          </div>

                            <ul class="mt-icon-list">
                              <li class="hidden-lg hidden-md">
                                 <a href="#" class="bar-opener mobile-toggle">
                                 <span class="bar"></span>
                                 <span class="bar small"></span>
                                 <span class="bar"></span>
                                 </a>
                              </li>
                              <li><a href="#" class="icon-magnifier"></a></li>
                              <li><a href="#" class="icon-heart"></a></li>
                              <li>
                                <CartOpener />
                              </li>

                              <li>
                                 <a href="#" class="bar-opener side-opener">
                                 <span class="bar"></span>
                                 <span class="bar small"></span>
                                 <span class="bar"></span>
                                 </a>
                              </li>






                          </ul>

                          <nav id="nav">
                            <ul>
                                {this.renderLinks()}
                                <li key={4}>
                                  <Link to="products">Products</Link>
                                </li>
                                <li key={5}>
                                  <Link to="products/new">New Products</Link>
                                </li>
                                <li key={6}>
                                  <Link to="categouries">Categouries</Link>
                                </li>
                            </ul>
                          </nav>

                        </div>
                      </div>
                  </div>
               </div>
            </header>



      // <div>
      //   <nav className="navbar navbar-default navbar-fixed-top">
      //     <div className="container">
      //       <div className="navbar-header">
      //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
      //           <span className="icon-bar" />
      //           <span className="icon-bar" />
      //           <span className="icon-bar" />
      //         </button>
      //         <Link className="navbar-brand" to="/">{this.props.logo}</Link>
      //       </div>

      //       <div className="collapse navbar-collapse" id="nav-collapse">
      //         <ul className="nav navbar-nav navbar-right">
      //           {this.renderLinks()}
      //           <li key={4}>
      //             <Link to="products">Products</Link>
      //           </li>,
      //           <li key={5}>
      //             <Link to="products/new">New Products</Link>
      //           </li>,
      //           <li key={6}>
      //             <Link to="categouries">Categouries</Link>
      //           </li>,
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(HeaderTemplate);
