import React,{Component} from 'react';

class MenuList extends Component{
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
            <div>
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