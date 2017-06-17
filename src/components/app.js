import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';

class App extends Component {
  render() {
    const preLoadStyle = {
      display: 'none'
    }
    return (
      <div>
      <div id="pre-loader" class="loader-container" style={preLoadStyle}>
            <div class="loader">
               <img src={"./../public/images/svg/rings.svg"} alt="loader" />
            </div>
         </div>

      <div class="w1">

        <HeaderTemplate  />

        
          {this.props.children}
        

        <FooterTemplate />
      </div>

      <span id="back-top" class="fa fa-arrow-up active"></span>
      </div>
    );
  }
}

export default App;
