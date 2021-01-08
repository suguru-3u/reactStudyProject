import React,{Component} from 'react';

class MenuList extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        border: "1rem solid",
        width:"300px"
    }

    h2 = {
        textAlign:"center"
    }

    ul = { 
        margin: "0px", 
        padding: "0px", 
        listStyle: "none" 
        }
        
    li = { 
        display: "inline", 
        padding: "0px", 
        margin: "0px",
        fontSize:"30px"
    }

    render(){
        return(
            <div style={this.style}>
              <h2 style={this.h2}>Menu</h2>
                <ul>
                    <li>Top</li>
                    <li>Blog投稿</li>
                </ul>
            </div>
        );
    }
}

export default MenuList