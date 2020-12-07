import React from 'react'
import "./styles.css"
import DailyOverview from './DailyOverview';
import History from './History'
//landing page of the app
class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main_page_wrapper" >
                <div className="daily_overview_wrapper">
                    {console.log(this.props.appState.currentUser)}
                    <DailyOverview/>
                </div>
                <div className="history_wrapper">
                    <History/>
                </div>
            </div>

        )

    }
}

export default MainPage