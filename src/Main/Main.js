import React,{Component} from "react";
import MainTop from "./MainTop"
import MainBlog from "./MainBlog"
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                <Router>
                    <Route exact path='/' component={MainTop}/>
                    <Route path='/blog' component={MainBlog}/>
                </Router>
            </div>
        );
    }
}

export default Main