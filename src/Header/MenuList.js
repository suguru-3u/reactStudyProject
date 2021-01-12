import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class MenuList extends Component{
    h2 = {
        textAlign:"center"
    }

    ul = { 
        paddingLeft: "0px",
        listStyle: "none" ,
        textAlign:"center"
        }
        
    li = { 
        display: "inline", 
        padding: "10px", 
        margin: "10px",
        width: "50px",
        height: "50px",
        fontSize:"25px",
        textAlign:"center",
        display: "inline"
    }

    render(){
        return(
            <div>
              <h2 style={this.h2}>Menu</h2>
                <ul style={this.ul}>
                    <Link to="/" style={this.li}>Top</Link> 
                    <Link to="/blogadd" style={this.li}>Blog投稿</Link>
                </ul>
            </div>
        );
    }
}

export default MenuList