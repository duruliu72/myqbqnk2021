import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reduecr from "./store/reduecr"
import reportWebVitals from './reportWebVitals';
const fetchPostMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log("dhfdhfgdhfgdhgfdhgfdhgf");
  next(action);
}
const fetchPostMiddleware1 = ({ dispatch, getState }) => (next) => (action) => {
  console.log("fetchPostMiddleware1");
  next(action);
}
const middlewareEnhancer = applyMiddleware(thunk, fetchPostMiddleware, fetchPostMiddleware1);
var store = createStore(reduecr, middlewareEnhancer);
// store.dispatch((dispatch, getState) => {
//   fetch('http://localhost:3005/api/genres')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("hgfgfj", json);
//     })
//     .catch(ex => {
//       console.log(ex);
//     });
// });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
