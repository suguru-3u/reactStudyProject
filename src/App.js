// import React from 'react';
import React,{Component} from 'react';
import './App.css';
import Header from './Header/Header.js';
import Menu from './Menu/Menu.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainTop from './Main/MainTop';
import MainBlog from './Main/MainBlog';
import MainBlogAdd from './Main/MainBlogAdd';
import MainBlogEdit from './Main/MainBlogEdit';

class App extends Component{

  render(){
    return(
      <div >
        <Router>
          <Header />
          {/* <Menu /> */}
          <Route exact path='/' component={MainTop}/>
          <Route path='/blog' component={MainBlog}/>
          <Route path='/blogadd' component={MainBlogAdd} />
          <Route path='/blogadd/edit/:id' component={MainBlogEdit} />
        </Router>
       
      </div>      
    );
  }
}

export default App;
