import './App.css'
import React from 'react'
import {Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index.js'
import SideBar from './components/SideBar/index.js'
import Calories from './components/Calories/index.js'
import ManageFood from './components/ManageFood/index.js'
import MainPage from './components/MainPage/index.js'

class App extends React.Component{

    constructor(props) {
    super(props)
    this.state = {
            selectedFunction: 'user_info'
        }
    }

    //this function helps to switch the functionality user can use in the side bar
    selectFunctionality(selectedType) {
        this.setState({selectedFunction: selectedType});
    }
    
    //switch which component to use on the right side of main page
    switchComponents() {
        switch(this.state.selectedFunction) {
            case 'calculate_calories':
                return <Calories appState={this.props.appState}/>
            case 'user_info':
                return <MainPage appState={this.props.appState}/>
            case 'manage_food':
                return <ManageFood appState={this.props.appState}/>
        }
    }

    render() {
        const mainpage = this.switchComponents();
        return (
            <div>
                <SideBar className="SideBar" appState={this.props.appState} selectFunctionality={this.selectFunctionality.bind(this)} />
                {mainpage}
            </div>

        );
    }
    
}




export default App;
