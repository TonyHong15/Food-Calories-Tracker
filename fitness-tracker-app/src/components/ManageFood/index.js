import React from "react";

import { Grid } from "@material-ui/core";

import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

import "./styles.css";

/* Component for ManageFood */
class ManageFood extends React.Component {

    render() {
        const { history, app } = this.props;

        return (
            <div className="ManageFoodBackground">
            <Grid container className="requests-grid">
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    {<FoodForm dashboard={this} app={app}/>}
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    {<FoodList app={app}/>}
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default ManageFood;