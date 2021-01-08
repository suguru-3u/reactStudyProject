// import React from 'react';
import React,{Component} from 'react';
import './App.css';
import Header from './Header/Header.js';
import Menu from './Menu/Menu.js';
import Main from './Main/Main.js';

class App extends Component{

  render(){
    return(
      <div >
        <Header />
        <Menu />
      </div>      
    );
  }
}

export default App;
