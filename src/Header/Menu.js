import React,{Component} from 'react';
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MainTop from '../Main/MainTop';
// import MainBlog from '../Main/MainBlog';
// import MainBlogAdd from '../Main/MainBlogAdd';
// import MainBlogEdit from '../Main/MainBlogEdit';
import Button from '@material-ui/core/Button';

class Menu extends Component{
 
    liStyle = {
        color: "white",
        marginRight: "25px"
    }

    render(){
        return(
            <div>
                <Button color="inherit"><Link to="/" style={this.liStyle}>Top</Link></Button>
                <Button color="inherit"><Link to="/blog" style={this.liStyle}>Blog一覧</Link></Button>  
            </div>  
           
        );
    }
}

export default Menu