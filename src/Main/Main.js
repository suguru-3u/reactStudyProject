import React,{Component} from "react";
import MainTop from "./MainTop"

class Main extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        width:"70%",
        height:"800px",
        textAlign: "right",
        display: "inline-block"
    }

    render(){
        return(
            <div style={this.style}>
              <MainTop />
            </div>
        );
    }
}

export default Main