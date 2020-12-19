import React,{Component} from 'react';
import './App.css';
import Rect from './Rect';

// let data = {title:'title',
//             message:'sample'}

let theme ={
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px"
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px"
  }
}

const ThemeContext = React.createContext(theme.dark);

class App extends Component{
  static contextType = ThemeContext;

  // newdata = {
  //   title:'newtitle',
  //   message:'newSample'
  // }

  render(){
    return(
      <div style={this.context}>
        <Title value="Content age" />
        <Message value="This is Content sample" />
        <Message value="This is Theme sample" />
      </div>      
    );
  }
}

class Title extends Component{
  static contextType = ThemeContext;

  render(){
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render(){
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

export default App;
