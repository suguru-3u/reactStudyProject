import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Memostore from './memo/Store';

// // ステートの値
// let state_value = {
//     counter:0,
//     massage:"counter"
// }

// // レデュサー
// function counter(state = state_value,action){
//     switch(action.type){
//         case "INCREMENT":
//         return {
//             counter:state.counter + 1,
//             massage:"INCREMENT"
//         };
//         case "DECREMENT":
//         return {
//             counter:state.counter - 1,
//             massage:"DECREMENT"
//         };
//         default:
//         return state;
//     }
// }

// // ストアの作成
// let store = createStore(counter);

ReactDOM.render(
    <Provider store={Memostore}>
        <App />
    </Provider >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
