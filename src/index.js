import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HistoryPage from './HistoryPage';
import WorklistPage from './WorklistPage';
import createHistory from 'history/createHashHistory';
import CameraPage from './camera'
import Test from './test'
import Login from './login'
const his = createHistory()
ReactDOM.render(
  <Router history={his}>
    <div>
    <Route exact path='/' component={App}/>
    <Route path='/history' component={HistoryPage}/>
    <Route path='/worklist' component={WorklistPage}/>
    <Route path='/camera' component={CameraPage}/>
    <Route path='/test' component={Test}/>
    <Route path='/login' component={Login}/>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
