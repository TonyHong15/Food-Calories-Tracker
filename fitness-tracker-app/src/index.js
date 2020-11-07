import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import * as serviceWorker from "./serviceWorker";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";


//landing page of the app
const LandingPage = (
    <div class="landingPage_main">
        <h1 class="header"> Welcome to Fitness Tracker App </h1>
        <h3 class="quote"> Success usually comes to those who are too busy to be looking for it... </h3>
        <Link class="landingPage_enter" to="./App">
            Enter Site
        </Link>
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/App" render={() => <App/>} />
                <Route path="/" render={() => LandingPage} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
