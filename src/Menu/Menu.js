import React,{Component} from 'react';
import MenuList from './MenuList';

class Menu extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        border: "1rem solid",
        width:"20%",
        height:"800px",
        textAlign: "left",
        display: "inline-block"
    }

    render(){
        return(
            <div style={this.style}>
              <MenuList />
            </div>
        );
    }
}

export default Menu