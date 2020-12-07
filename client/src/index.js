import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage';
import Register from './components/Register'

//import * as serviceWorker from "./serviceWorker";
import {Route, Switch, BrowserRouter } from "react-router-dom";

const state = {
    currentUser: null
}
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/Register" render={() => <Register appState = {state}/>} />
                <Route exact path="/App" render={() => <App  appState = {state}/>} />
                <Route path="/" render={() => <LandingPage appState = {state}/>} />

            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
