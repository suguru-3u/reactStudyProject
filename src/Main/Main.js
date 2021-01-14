import React,{Component} from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainTop from "./MainTop"
import MainBlog from "./MainBlog"

export default function Main(){
    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MainTop />
                </Route>
                <Route path="/blog" exact>
                    <MainBlog />
                </Route> 
            </Switch>
            <Footer />
        </Router>
    )
}