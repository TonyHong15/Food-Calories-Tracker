import React from 'react'
import "./styles.css"
import {loadFood} from "../../../api"

/**
*
 */
class FoodList extends React.Component {
    constructor(props) {
        super(props)
        this.app = props.app;
    } 
    render() {
        return (
            <div style={{overflow: "scroll", overflow: "hidden"}}>
                <h1>Today's Food List: </h1><br /><br />
                {this.props.foodList.foodList.map((foodItem) => {
                    return (
                        <div key={foodItem.foodName} >
                            <div style={{ backgroundColor: "Bisque" }}>
                                <div><b style={{ display: "inline-block" }}>Food:</b> {foodItem.foodName}</div>
                                <b style={{ display: "inline-block" }}>Calories:</b> {foodItem.foodCalories}
                                <br />
                            </div>
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }
}


export default FoodList;