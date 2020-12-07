import React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Redirect} from 'react-router-dom'
/* Component for register form */
class RegisterForm extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            username,
            password,
            birthday,
            handleInputChange,
            handleRegister,
            redirect
        } = this.props;
        if (redirect){
            return(
                <Redirect to={{pathname: '/'}}/> 
            )
        }
        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        name="firstName"
                        variant="filled"
                        label="First Name"
                        value={firstName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="lastName"
                        variant="filled"
                        label="Last Name"
                        value={lastName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="username"
                        variant="filled"
                        label="Username"
                        value={username}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="password"
                        variant="filled"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="birthday"
                        variant="filled"
                        label="Birthday"
                        type="date"
                        value={birthday}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        fullWidth
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        );
    }
}


export default RegisterForm;
