import React,{Component} from 'react';
import MenuList from './MenuList';

class Menu extends Component{
    style ={
        margin:"0px",
        padding:"0px",
        border: "1rem solid"
    } 

    render(){
        return(
            <div >
              <MenuList />
            </div>
        );
    }
}

export default Menu