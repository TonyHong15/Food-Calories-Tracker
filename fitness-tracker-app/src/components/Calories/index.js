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
        this.submitCaloriesGoal = this.submitCaloriesGoal.bind(this)

        this.getCurrentCarbohydrates = this.getCurrentCarbohydrates(this)
        this.getCurrentFats = this.getCurrentFats(this)
        this.getCurrentProteins = this.getCurrentProteins(this)
        this.submitBrokenDownGoal = this.submitBrokenDownGoal.bind(this)

        this.state = {
            caloriesGoal: 0,
            totalCalories: this.getCurrentCalories,
            carbohydrateGoal: 0,
            totalCarbohydrates: this.getCurrentCarbohydrates,
            fatGoal: 0,
            totalFats: this.getCurrentFats,
            proteinGoal: 0,
            totalProtein: this.getCurrentProteins,          
            currentCaloriesPCT: this.submitCaloriesGoal
        }
        this.textFieldCaloriesGoal = this.textFieldCaloriesGoal.bind(this)
        this.textFieldCarbohydratesGoal = this.textFieldCarbohydratesGoal.bind(this)
        this.textFieldFatsGoal = this.textFieldFatsGoal.bind(this)
        this.textFieldProteinsGoal = this.textFieldProteinsGoal.bind(this)
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
    submitCaloriesGoal(e) {
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


    getCurrentCarbohydrates() {
        // TODO get today's foods from backend
        return 0
    }
    textFieldCarbohydratesGoal(e) {
        this.setState({
            carbohydrateGoal: e.target.value
        });
    }

    getCurrentFats() {
        // TODO get today's foods from backend
        return 0
    }
    textFieldFatsGoal(e) {
        this.setState({
            fatGoal: e.target.value
        });
    }

    getCurrentProteins() {
        // TODO get today's foods from backend
        return 0
    }
    textFieldProteinsGoal(e) {
        this.setState({
            proteinGoal: e.target.value
        });
    }
    submitBrokenDownGoal(e) {
        // TODO: Call the endpoint to the backend here to submit carbs, fat, and protein goals
    }

    render() {
        const caloriePCT = 60; // TODO 
        return (
            <div className="CaloriesBackground">
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <h1>Your Goal For Today:</h1>
                        {/* ------------------------------------------------------------- */}
                        <h3>Daily Calories:</h3>
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
                            onClick={this.submitCaloriesGoal}
                            style={{ width: '100%' }}
                        >
                            Add Calorie Goal
                        </Button>
                        {/* ------------------------------------------------------------- */}
                        <h3>Daily Carbohydrates:</h3> 
                        <TextField
                            value={this.state.carbohydrateGoal}
                            onChange={this.textFieldCarbohydratesGoal}
                            style={{ width: '100%' }}
                            type="number"
                        />
                        {/* ------------------------------------------------------------- */}
                        <h3>Daily Fat:</h3>
                        <TextField
                            value={this.state.fatGoal}
                            onChange={this.textFieldFatsGoal}
                            style={{ width: '100%' }}
                            type="number"
                        />
                        {/* ------------------------------------------------------------- */}
                        <h3>Daily Protein:</h3>
                        <TextField
                            value={this.state.proteinGoal}
                            onChange={this.textFieldProteinsGoal}
                            style={{ width: '100%' }}
                            type="number"
                        />
                        <Button
                            variant="contained"
                            color="default"
                            onClick={this.submitBrokenDownGoal}
                            style={{ width: '100%' }}
                        >
                            Add Detailed Goals
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