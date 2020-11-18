import React from 'react'
import "./styles.css"
import {Link} from 'react-router-dom'
//landing page of the app
class LandingPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='landingPage'>
                <div class="landingPage_main">
                <h1 class="header"> Welcome to Fitness Tracker App </h1>
                <h3 class="quote"> Success usually comes to those who are too busy to be looking for it... </h3>
                <Link class="landingPage_enter" to="./App">
                    Enter Site
                </Link>
                </div>
            </div>

        )

    }
}

export default LandingPage