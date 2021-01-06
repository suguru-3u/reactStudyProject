// import React from 'react';
import React,{Component} from 'react';
import './App.css';
import AddForm from './memos/AddForm';

class App extends Component{
  td = {
    width:"250px"
  }

  render(){
    return(
      <div >
        <h1>Memo</h1>
        <AddForm a="b"/>
        <p>THis is Sample</p>
      </div>      
    );
  }
}

export default App;
