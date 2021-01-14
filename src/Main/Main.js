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
import MainEdit from "./MainEdit"



// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     from: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
//     table: {
//         minWidth: 650,
//     },
//     paper: {
//         padding: theme.spacing(3),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         height:'130%'
//     },
// }));

// export const UserCount = React.createContext()

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
                <Route path="/blog/edit/1" exact>
                    <MainEdit />
                </Route> 
            </Switch>
            <Footer />
        </Router>
    );
}