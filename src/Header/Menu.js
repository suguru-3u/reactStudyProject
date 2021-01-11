import React,{Component} from 'react';
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MainTop from '../Main/MainTop';
// import MainBlog from '../Main/MainBlog';
// import MainBlogAdd from '../Main/MainBlogAdd';
// import MainBlogEdit from '../Main/MainBlogEdit';

class Menu extends Component{

    ulStyle = {
        display: "flex"
    }  
    
    
    liStyle = {
        display: "inline-block",
        marginRight: "25px"
    }

    render(){
        return(  
            <ul style={this.ulStyle}>
                <li style={this.liStyle}><Link to="/" style={this.li}>Top</Link></li>
                <li style={this.liStyle}><Link to="/blog" style={this.li}>Blog一覧</Link></li>
                <li style={this.liStyle}><Link to="/blogadd" style={this.li}>Blog投稿</Link></li>                
            </ul>  
        );
    }
}

export default Menu