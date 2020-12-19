import React,{Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Rect from './Rect';

// let data = {title:'title',
//             message:'sample'}

// ステートのマッピング
function mappongState(state){
  return state;
}

// let theme ={
//   light:{
//     backgroundColor:"#eef",
//     color:"#006",
//     padding:"10px"
//   },
//   dark:{
//     backgroundColor:"#006",
//     color:"#eef",
//     padding:"10px"
//   }
// }

// const ThemeContext = React.createContext(theme.dark);

class App extends Component{
  // static contextType = ThemeContext;

  // newdata = {
  //   title:'newtitle',
  //   message:'newSample'
  // }

  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div >
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>      
    );
  }
}
// ストアのコネクト
App = connect()(App);

// class Title extends Component{
//   static contextType = ThemeContext;

//   render(){
//     return (
//       <div>
//         <h2 style={this.context}>{this.props.value}</h2>
//       </div>
//     );
//   }
// }

class Message extends Component {
  // static contextType = ThemeContext;

  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <div>
        <p style={this.state}>
          {this.props.massage}: {this.props.counter}
        </p>
      </div>
    );
  }
}
// ストアのコネクト
Message = connect(mappongState)(Message);

class Button extends Component{
  style = {
    fontSize:"16pt",
    padding:"5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    if(e.shiftKey){
      this.props.dispatch({type:'DECREMENT'});
    }else{
      this.props.dispatch({type:'INCREMENT'});
    }
  }

  render(){
    return(
      <button style={this.style} onClick={this.doAction}>
        Click
      </button>
    );
  }
}
// ストアのコネクト
Button = connect()(Button);

export default App;
