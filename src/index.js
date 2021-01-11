import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogStore from './store/BlogStore';

ReactDOM.render(
    <Provider store={BlogStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
