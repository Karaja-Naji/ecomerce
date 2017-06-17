import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PagesHeader extends Component {


  render() {
    const divStyle = {
            
              backgroundImage: 'url(./../../public/images/img11.jpg )',
            };
    return (
              <section class="mt-contact-banner style4" style={divStyle} >
                  <div class="container">
                     <div class="row">
                        <div class="col-xs-12 text-center">
                           <h1>CHAIRS</h1>

                           <nav class="breadcrumbs">
                              <ul class="list-unstyled">
                                 <li><a href="#">Home <i class="fa fa-angle-right"></i></a></li>
                                 <li><a href="#">Products <i class="fa fa-angle-right"></i></a></li>
                                 <li>Chairs</li>
                              </ul>
                           </nav>
                          
                        </div>
                     </div>
                  </div>
               </section>

    );
  

}


}


export default PagesHeader;
