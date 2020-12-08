import React from "react";

import { Grid } from "@material-ui/core";

import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

import "./styles.css";
import { loadFood } from "../../api";

/* Component for ManageFood */
class ManageFood extends React.Component {
    constructor(props) {
        super(props)
        this.app = props.app;
        // TODO call the backend here to initialize foodList
        this.state = {
            foodList: []
        }
    }
    componentDidMount(){
       this.loadFood()
    }
    loadFood = () =>{
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
                this.setState(
                    {foodList: json.foods}
                )
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const { history, app } = this.props;

        return (
            <div className="ManageFoodBackground">
            <Grid container className="requests-grid">
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    {<FoodForm appState={this.props.appState} foodList={this.state} dashboard={this} app={app}/>}
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    {<FoodList appState={this.props.appState} foodList={this.state} app={app}/>}
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default ManageFood;