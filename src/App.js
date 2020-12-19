import React,{Component} from 'react';
import './App.css';
import Rect from './Rect';

let data = {title:'title',
            message:'sample'}

const sampleContext = React.createContext(data);

class App extends Component{
  
  newdata = {
    title:'newtitle',
    message:'newSample'
  }

  render(){
    return(
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <sampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </sampleContext.Provider>
        <Title />
        <Message />
      </div>      
    );
  }
}

class Title extends Component{
  static contextType = sampleContext;

  render(){
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = sampleContext;

  render(){
    return (
      <div>
        <h2>{this.context.message}</h2>
      </div>
    );
  }
}

export default App;
