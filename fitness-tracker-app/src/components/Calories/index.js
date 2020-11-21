import React from 'react'
import "./styles.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Grid, TextField, Button } from "@material-ui/core";

/**
*
 */
class Calories extends React.Component {

    constructor(props) {
        super(props);
        
        this.getCurrentCalories = this.getCurrentCalories(this)
        this.submiteCaloriesGoal = this.submiteCaloriesGoal.bind(this)

        this.state = {
            caloriesGoal: 0,
            totalCalories: this.getCurrentCalories,
            currentCaloriesPCT: this.submiteCaloriesGoal
        }
        this.textFieldCaloriesGoal = this.textFieldCaloriesGoal.bind(this)
    }

    getCurrentCalories() {
        // TODO get today's foods from backend
        // TODO calculate total calories
        return 0
    }

    textFieldCaloriesGoal(e) {
        this.setState({
            caloriesGoal: e.target.value
        });
    }

    submiteCaloriesGoal(e) {
        if (this.caloriesGoal == 0) {
            this.setState({
                currentCaloriesPCT: 100
            })
        }
        else {
            this.setState({
                currentCaloriesPCT: this.totalCalories / this.caloriesGoal
            })
        }
        // TODO: Call the endpoint to the backend here
    }

    render() {
        const caloriePCT = 60; // TODO 
        return (
            <div className="CaloriesBackground">
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <h1>Your Calories Goal For Today:</h1>
                        <TextField
                            value={this.state.caloriesGoal}
                            onChange={this.textFieldCaloriesGoal}
                            style={{ width: '100%' }}
                            // inputStyle={{ fontSize: "50px" }}
                            type="number"
                        />
                        <Button
                            variant="contained"
                            color="default"
                            onClick={this.submiteCaloriesGoal}
                            style={{ width: '100%' }}
                        >
                            Add Goal
                        </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        {/* <div className="CaloriesView"> */}
                        <h1> Calories % Consumed Today: </h1>
                        <div className="CaloriesProgressBar">
                            <CircularProgressbar
                                value={caloriePCT}
                                text={`${caloriePCT}%`}
                                styles={buildStyles({
                                    minValue: 0,

                                    rotation: 1,              // Rotation of path and trail, in number of turns (0-1)
                                    strokeLinecap: 'round',   // 'butt' or 'round'
                                    textSize: '16px',

                                    pathTransitionDuration: 0.5,  // Seconds taken to go from one percentage to another

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(62, 152, 199, ${caloriePCT / 100})`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                        </div>
                        {/* </div> */}
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default Calories;