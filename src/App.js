import React,{Component} from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{
  render(){
    return <div>
        <h1>React</h1>
        <Rect x="100" y="300" width="100" height="100" color="cyan" />
        <Rect x="150" y="600" w="100" h="100" c="magenta" />   
    </div>
  }
}



export default App;
