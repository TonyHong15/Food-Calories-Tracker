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
            <Grid className="requests-grid">
                <Grid item xs="2"></Grid>
                <Grid item xs="7">

                    {<FoodForm dashboard={this} app={app}/>}

                    {<FoodList app={app}/>}

                </Grid>
                <Grid item xs="2">
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default ManageFood;