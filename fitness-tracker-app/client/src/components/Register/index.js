import React from "react";
import RegisterForm from "./RegisterForm";
import {Link} from 'react-router-dom'
import "./styles.css";
import { Container, Button, Typography } from "@material-ui/core";
import { handleInputChange, handleRegister } from "../../actions/register.js";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
/* Component for register page */
const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem', 
  fontWeight: '600',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
theme.typography.h2 = {
    fontSize: '1.2rem', 
    fontWeight: '900',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            birthday: null,
            slideIn: true,
            slideDirection: "right",
            redirect: false
        };
    }
    
    

    render() {
        return (
            <div className='register__page'>
                <div className='register_wrapper'>
                    <div className='register_title_wrapper'>
                        <Link className='register_to_home_link' to={"/"}> 
                            <Button color='inherit' className="register_to_home_button" variant="contained" size="large">
                                <span className='back_button_text'>
                                    Back
                                </span>
                            </Button>
                        </Link>
                        <div className='register_logo'></div>
                        <div className='register_title'>
                            <span className='register_title_text'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h2">Welcome</Typography>
                                </ThemeProvider>
                            </span>
                        </div>
                        <div className='register_subtitle'>
                            <span className='register_subtitle_text'>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3">Create Your Account</Typography>
                            </ThemeProvider>
                            </span>
 
                        </div>
                    </div>
                    <Container className='register__form' maxWidth="xs">
                        <RegisterForm
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            username={this.state.username}
                            password={this.state.password}
                            birthday={this.state.birthday}
                            redirect={this.state.redirect}
                            handleInputChange={(event) => handleInputChange(event, this)}
                            handleRegister={() => handleRegister(this)}
                        />
                    </Container>
                </div>
                
                
            </div>
        );
    }
}

export default Register;
