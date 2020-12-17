import React,{Component} from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{
  input = "";

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }
  inputStyle = {
    fontSize:"12pt",
    padding:"5px",
  }

  constructor(props){
    super(props);
    this.state = {
      message:"type your name"
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input = event.target.value;
  }

  doSubmit(e){
    this.setState({
      message: "Hello, " + this.input + "!!"
    });
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.doSubmit}>  
          <label>
            <span style={this.inputStyle}></span>Message;
            <input type="text" style={this.inputStyle}
              onChange={this.onChange}
              required pattern="[A-Za-z_,.]+" />
          </label>
        </form>
      </div>      
    );
  }
}

// class Message extends Component{
//   li = {
//     fontSize:"16pt",
//     color:"#06",
//     margin:"0px",
//     padding:"0px",
//   }
//   render(){
//     let content = this.props.children;
//     let arr = content.split('。');
//     let arr2 = [];
//     for(let i = 0; i < arr.length ; i ++){
//       if(arr[i].trim() != ''){
//         arr2.push(arr[i]);
//       }
//     }
//     let list = arr2.map((value,key) => 
//       <li style={this.li} key={key}>{value}.</li>
//     );
//     return(
//       <div>
//         <h2>{this.props.title}</h2>
//         <ol>{list}</ol>
//       </div>
//     );
//   }
// }

export default App;
