import React,{Component} from 'react';

class MenuList extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        border: "1rem solid"
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
    }

    render(){
        return(
            <div style={this.style}>
              <h2>Menu</h2>
                <ul>
                    <li>Top</li>
                    <li>Blog投稿</li>
                </ul>
            </div>
        );
    }
}

export default MenuList