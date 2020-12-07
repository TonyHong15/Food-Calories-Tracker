import React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Redirect} from 'react-router-dom'
import "./styles.css";
import { handleInputChange, handleLogin } from "../../actions/register.js";
/* Component for register form */
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        };
    }
    render() {
        const {username, password, redirect} = this.state
        if (redirect){
            return(
                <Redirect to={{pathname: '/App'}}/> 
            )
        }
        return (
            <Grid container spacing={2} className="login__form">
                <Grid item xs={12}>
                    <TextField InputLabelProps={{style:{color: '#fff'}}}
                        name="username"
                        variant="filled"
                        label="Username"
                        value={username}
                        onChange={(event) => handleInputChange(event, this)}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField InputLabelProps={{style:{color: '#fff'}}}
                        name="password"
                        variant="filled"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => handleInputChange(event, this)}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={() => handleLogin(this, this.props.appState)}
                        fullWidth
                    >   
                        <span className="login_submit_text"> Log In </span>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}


export default LoginForm;
