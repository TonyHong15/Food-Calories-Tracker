import './App.css'
import React from 'react'
import {Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index.js'

class App extends React.Component{

  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={() => LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
  
    );
  }
    
}




export default App;
