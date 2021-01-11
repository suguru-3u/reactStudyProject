// import React from 'react';
import React,{Component} from 'react';
import Heading from './Heading';

class Header extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        textAlign:"center",
        border: "1rem solid"
    } 

  render(){
    return(
      <div style={this.style}>
        <Heading />
        <Menu />
      </div>      
    );
  }
}

export default Header;
