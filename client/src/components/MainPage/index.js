import React from 'react'
import "./styles.css"
import DailyOverview from './DailyOverview';
import History from './History'
import {Redirect} from 'react-router-dom'
//landing page of the app
class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.appState.currentUser){
            return(
                <Redirect to={{pathname: '/'}}/> 
            )
        }
        return(
            <div className="main_page_wrapper" >
                <div className="daily_overview_wrapper">
         
                    <DailyOverview appState={this.props.appState}/>
                </div>
                <div className="history_wrapper">
                    <History appState={this.props.appState}/>
                </div>
            </div>

        )

    }
}

export default MainPage