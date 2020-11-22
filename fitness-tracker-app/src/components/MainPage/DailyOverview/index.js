import React from 'react'
import "./styles.css"
//landing page of the app
class DailyOverview extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="daily_overview_page_wrapper">
                This is the Daily Overview
            </div>
        )

    }
}

export default DailyOverview