import './App.css'
import React from 'react'
import {Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index.js'
import SideBar from './components/SideBar/index.js'
import Calories from './components/Calories/index.js'


class App extends React.Component{

    constructor(props) {
    super(props)
    this.state = {
            selectedFunction: 'user_info'
        }
    }

    selectFunctionality(selectedType) {
        this.setState({selectedFunction: selectedType});
        if (selectedType == "calculate_calories"){
            console.log("test if statement passed")
        }
        console.log(selectedType)
    }

    switchComponents() {
        switch(this.state.selectedFunction) {
            case 'calculate_calories':
                return <Calories/>
        }
    }

    render() {
        const mainpage = this.switchComponents();
        return (
            <div>
                <SideBar className="SideBar" selectFunctionality={this.selectFunctionality.bind(this)} />
                {mainpage}
            </div>

        );
    }
    
}




export default App;
