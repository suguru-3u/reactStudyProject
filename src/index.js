import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogStore from './store/BlogStore';
import {Provider} from 'react-redux';
import Firebase,{db} from './db/Firebase';
import firebase from 'firebase';


ReactDOM.render(
    <Provider store={BlogStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
