import React from 'react'
import "./styles.css"
import {Link} from 'react-router-dom'
import LoginForm from '../LoginForm'
import{ Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//landing page of the app

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem', 
  fontWeight: '600',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};
class LandingPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='landingPage'>
                <div className="landingPage_main">
                    <h1 className="header"> Welcome to Fitness Tracker App </h1>
                    <h3 className="quote"> Success usually comes to those who are too busy to be looking for it... </h3>
                    <Link className="landingPage_enter" to="./Register">
                        Enter Site
                    </Link>
                    <div className="login_register_wrapper">
                        <ThemeProvider theme={theme} >
                            <Typography variant="h3" fontWeight={900}>Have An Account?</Typography>
                        </ThemeProvider>
                        <div className="login_form_element">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default LandingPage