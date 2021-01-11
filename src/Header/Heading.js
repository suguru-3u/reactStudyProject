// import React from 'react';
import React,{Component} from 'react';

class Heading extends Component{

  logStyle = {
      position: "absolute",
      left: "20px",
      top: "10px",
  }

  render(){
    return(
        <h1 style={this.logStyle}>Bookers</h1>
    );
  }
}

export default Heading;
