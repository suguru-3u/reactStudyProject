import React,{Component} from 'react';


class Rect extends Component{
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = "white";
    style = {};
  
    constructor(proos){
        super(proos);
        this.x = proos.x;
        this.y = proos.y;   
        this.width = proos.width;
        this.height = proos.height;
        this.color = proos.color;
        this.style = {
            backgroundColor:this.color,
            position:"absolute",
            left:this.x + "px",
            top:this.y + "px",
            width:this.width + "px",
            height:this.height + "px",    
        }
    }
  
    render(){
        return <div style={this.style}></div>;
    }
}

export default Rect;