import './App.css'
import React from 'react'
import {Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index.js'
import SideBar from './components/SideBar/index.js'

class App extends React.Component{

    constructor(props) {
    super(props)
    this.state = {
            selectedFunction: 'user_info'
        }
    }

    selectFunctionality(selectedType) {
        this.setState({selectedFunction: selectedType});
        console.log(selectedType)
    }

    render() {

        return (
            <div>
                <SideBar className="SideBar" selectFunctionality={this.selectFunctionality.bind(this)} />
            </div>

        );
    }
    
}




export default App;
