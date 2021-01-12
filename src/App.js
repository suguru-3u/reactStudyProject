import React, { useState } from 'react';
import Main from './Main/Main';
import MainTop from './Main/MainTop';
import MainBlogAdd from './Main/MainBlogAdd';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Main />
    </div>
  );

}