import React, { Component } from 'react';


class ProductHeader extends Component {


  render() {

    return (
            <header class="mt-shoplist-header">
                                 
                 <div class="btn-box">
                    <ul class="list-inline">
                       <li>
                          <a href="#" class="drop-link">
                          Default Sorting <i aria-hidden="true" class="fa fa-angle-down"></i>
                          </a>
                          <div class="drop">
                             <ul class="list-unstyled">
                                <li><a href="#">ASC</a></li>
                                <li><a href="#">DSC</a></li>
                                <li><a href="#">Price</a></li>
                                <li><a href="#">Relevance</a></li>
                             </ul>
                          </div>
                       </li>
                       <li><a class="mt-viewswitcher" href="#"><i class="fa fa-th-large" aria-hidden="true"></i></a></li>
                       <li><a class="mt-viewswitcher" href="#"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
                    </ul>
                 </div>

                 <div class="mt-textbox">
                    <p>Showing  <strong>1–9</strong> of  <strong>65</strong> results</p>
                    <p>View   <a href="#">9</a> / <a href="#">18</a> / <a href="#">27</a> / <a href="#">All</a></p>
                 </div>
              
             </header>

    );
  

}


}


export default ProductHeader;
