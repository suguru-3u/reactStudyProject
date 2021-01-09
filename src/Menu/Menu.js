import React,{Component} from 'react';
import MenuList from './MenuList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainTop from '../Main/MainTop';
import MainBlog from '../Main/MainBlog';
import MainBlogAdd from '../Main/MainBlogAdd';

class Menu extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        width:"100%",
        height:"800px",
        textAlign: "left",
        display: "inline-block"
    }

    render(){
        return(
            <div style={this.style}>
                <Router>
                    <MenuList />
                    <Route exact path='/' component={MainTop}/>
                    <Route path='/blog' component={MainBlog}/>
                    <Route path='/blogadd' component={MainBlogAdd} />
                </Router>
            </div>
        );
    }
}

export default Menu