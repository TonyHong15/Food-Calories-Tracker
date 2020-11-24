import React from 'react'
import "./styles.css"
import { TextField, Button } from '@material-ui/core';
import { loadFood, addFood } from "../../../api"
// import FoodTracker from '../../../../server/services/tracker';

/**
*
 */
class FoodForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label: '',
            price: 0.0,
            foodName: '',
            foodCalories: 0,
            foodList: []
        }
        this.textFieldFoodName1 = this.textFieldFoodName1.bind(this)
        this.textFieldFoodCalories1 = this.textFieldFoodCalories1.bind(this)
        this.submitNewFood = this.submitNewFood.bind(this)
    }

    textFieldFoodName1(e) {
        this.setState({
            foodName: e.target.value
        });
    }
    textFieldFoodCalories1(e) {
        this.setState({
            foodCalories: e.target.value
        });
    }

    submitNewFood(e) {
        
        const foodName = this.state.foodName 
        const foodCalories = this.state.foodCalories
        
        this.setState({
            foodName: '',
            foodCalories: 0
        });
        
        // TODO: Call the endpoint to the backend here
        addFood(foodName, foodCalories)
    }

    render() {
        const caloriePCT = 60;
        return (
            <div>
                <h1>Add Today's Food:</h1><br /><br />

                <h3>Enter Your Food Name:</h3>
                <TextField
                    value={this.state.foodName}
                    onChange={this.textFieldFoodName1}
                    style={{ width: '100%' }} 
                />
                <h3>The Food's Calories:</h3>
                <TextField
                    value={this.state.foodCalories}
                    onChange={this.textFieldFoodCalories1}
                    style={{ width: '100%' }}
                    type="number"
                />
                <Button
                    variant="contained"
                    color="default"
                    onClick={this.submitNewFood}
                    style={{ width: '100%' }}
                >
                    Add Food
                </Button>
            </div>
        );
    }
}


export default FoodForm;