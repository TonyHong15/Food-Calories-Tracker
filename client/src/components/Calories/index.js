import React from 'react'
import "./styles.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Grid, TextField, Button } from "@material-ui/core";
// import FoodTracker from '../../../../server/services/tracker';

/**
*
 */
class Calories extends React.Component {

    constructor(props) {
        super(props);
        
        this.submitCaloriesGoal = this.submitCaloriesGoal.bind(this)

        this.getCurrentCarbohydrates = this.getCurrentCarbohydrates(this)
        this.getCurrentFats = this.getCurrentFats(this)
        this.getCurrentProteins = this.getCurrentProteins(this)
        this.submitBrokenDownGoal = this.submitBrokenDownGoal.bind(this)

        this.state = {
            goal: 0,
            calorieGoal: 0,
            caloriePCT: 0,
            currentCalories: 0,
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

    componentDidMount(){
        this.getCurrentandGoal()
    }
    getCurrentandGoal = () => {
        console.log(this.props.appState.currentUser)
        const request = new Request('/api/users/'+ window.sessionStorage.getItem('currentUser'), {
            method: "get",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(request)
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => {
                console.log(json.foods)
                const consumed = json.foods.reduce((total, food) => {
                    return total + food.foodCalories
                }, 0)
                console.log(consumed)
                const caloriePCT = Number(((consumed/json.goal)*100).toFixed(1)) 
                this.setState({
                    currentCalories: consumed,
                    calorieGoal: json.goal,
                    caloriePCT: caloriePCT
                })
            })
            .catch(error => {
                console.log(error);
            });
        
    }
    textFieldCaloriesGoal(e) {
        this.setState({
            goal: e.target.value
        });
    }
    submitCaloriesGoal(e) {
        const request = new Request('/api/setgoal/'+ window.sessionStorage.getItem('currentUser'), {
            method: "post",
            body:  JSON.stringify(this.state),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(request)
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => {
                console.log(json)
                const caloriePCT = Number(((this.state.currentCalories/json.goal)*100).toFixed(1)) 
                this.setState({
                    goal: 0,
                    calorieGoal: json.goal,
                    caloriePCT: caloriePCT
                })
            })
            .catch(error => {
                console.log(error);
            });
            this.render()
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
         
        return (
            <div className="CaloriesBackground">
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <h1>Your Goal For Today:</h1>
                        {/* ------------------------------------------------------------- */}
                        <h3>Daily Calories:</h3>
                        <TextField
                            value={this.state.goal}
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
                        <h3>Add Detailed Goals (adding up to calories goal):</h3>
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
                                value={this.state.caloriePCT}
                                text={`${this.state.caloriePCT}%`}
                                styles={buildStyles({
                                    minValue: 0,

                                    rotation: 1,              // Rotation of path and trail, in number of turns (0-1)
                                    strokeLinecap: 'round',   // 'butt' or 'round'
                                    textSize: '16px',

                                    pathTransitionDuration: 0.5,  // Seconds taken to go from one percentage to another

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(0, 200, 0, ${this.state.caloriePCT / 100})`,
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