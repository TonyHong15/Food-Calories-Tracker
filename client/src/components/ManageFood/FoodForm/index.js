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
            searchFoodName: '',
            searchFoodOptions: [],
            foodCalories: 0,
            foodList: []
        }
        this.textFieldFoodName1 = this.textFieldFoodName1.bind(this)
        this.textFieldSearchFoodName = this.textFieldSearchFoodName.bind(this)
        this.textFieldFoodCalories1 = this.textFieldFoodCalories1.bind(this)
        this.submitNewFood = this.submitNewFood.bind(this)
        this.searchFood = this.searchFood.bind(this)
        this.searchFoodChosen = this.searchFoodChosen.bind(this)
    }

    textFieldSearchFoodName(e) {
        this.setState({
            searchFoodName: e.target.value
        });
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

    searchFood(e) {
        const api_key = "8fmrKhfE2ggope5PBqfcTAAUBrf2Y6CBHVXBBko4"
        const food_str = this.state.searchFoodName.replace(" ", "%20")
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${api_key}&query=${food_str}`
        var request = new XMLHttpRequest();
        request.open('GET', url, false);  
        request.send(null);

        if (request.status === 200) {
            var food_results = (JSON.parse(request.responseText));
            
        }  



        var foodOptions = []
        var len = Math.min(20, food_results["foods"].length)

        for (var i = 0; i < len; i++){
            var f = {}
            
            f["fdcId"] = food_results["foods"][i]["fdcId"]
            f["brandOwner"] = food_results["foods"][i]["brandOwner"]
            f["description"] = food_results["foods"][i]["description"]
            var name = f["description"].concat(", ")
            name = name.concat(f["brandOwner"])
            foodOptions.push(f)
            
        }
        document.getElementById("searchResults").style.display = "block"

        this.setState({
            searchFoodOptions: foodOptions,    
        });
        
    }

    searchFoodChosen(e) {        
        const api_key = "8fmrKhfE2ggope5PBqfcTAAUBrf2Y6CBHVXBBko4"
        const url=`https://api.nal.usda.gov/fdc/v1/food/${e.target.value}?api_key=${api_key} `;
        var request = new XMLHttpRequest();
        request.open('GET', url, false); 
        request.send(null);

        if (request.status === 200) {
        var details = JSON.parse(request.responseText)
        }  

        var f = {}
        f["description"] = details["description"]
        f["servingSize"] = details["servingSize"]
        f["servingSizeUnit"] = details["servingSizeUnit"]
        f["labelNutrients"] = details["labelNutrients"]

        this.setState({   
            foodName: f["description"],
            foodCalories: Math.round(f["labelNutrients"]["calories"]["value"])
        });
    }



    //ADDING A CUSTOM FOOD TO USER  (CONNECTED TO BACKEND)
    submitNewFood(e) {       
        console.log(this.props.appState.currentUser)
        const request = new Request('/api/addFood/'+ this.props.appState.currentUser, {
            method: "post",
            body: JSON.stringify(this.state),
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
            }) .then(json => {
                console.log(json.foods)
                this.props.foodList.foodList = json.foods
            })
            .catch(error => {
                console.log(error);
            });
            
        this.setState({
            foodName: '',
            foodCalories: 0
        });

    }

    render() {
        const caloriePCT = 60;
        return (
            <div>
                <h1>Add Today's Food:</h1><br /><br />

                <h3>Search Your Food Name:</h3>
                <TextField
                    value={this.state.searchFoodName}
                    onChange={this.textFieldSearchFoodName}
                    style={{ width: '100%' }} 
                />
                <Button
                    variant="contained"
                    color="default"
                    onClick={this.searchFood}
                    style={{ width: '100%' }}
                >
                    Search Food
                </Button>



                <select id='searchResults' onChange={this.searchFoodChosen}>
                    {this.state.searchFoodOptions.map((food) => {
                    return(
                        <option value={food.fdcId}>
                        {food.description}, {food.brandOwner}
                        </option>
                    )
                    })}
                </select>

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