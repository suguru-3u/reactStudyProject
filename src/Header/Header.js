// import React from 'react';
import React,{Component} from 'react';
import Heading from './Heading';
import Menu from './Menu';

class Header extends Component{
    headerStyle ={
        textAlign:"right"
    } 

  render(){
    return(
      <div style={this.style}>
        <header>
          <Heading />
          <Menu />
        </header>
      </div>      
    );
  }
}

export default Header;
