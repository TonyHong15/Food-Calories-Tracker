import React from 'react'
import "./styles.css"

/**
 * A menu with Side Bar where user can choose functionality
 *
 * Props: 
 * - selectFunctionality: a callback function to update the type of funtionality user choose
 */
class SideBar extends React.Component {
    
    updateSelection(selectedType) {
        this.props.selectFunctionality(selectedType);
    }

    render() {
        this.updateSelection.bind(this);
        return (
            <div class="SideBar">
                <FunctionItem
                    text="User Info" 
                    id="FunctionItem User_Info_button"
                    onClick={() => {
                        this.updateSelection("user_info");
                    }}
                />
                <FunctionItem
                    text="Manage Food" 
                    id="FunctionItem Manage_Food_button" 
                    onClick={() => {
                        this.updateSelection("manage_food");
                    }}
                />
                <FunctionItem
                    text="Calculate Caloeries" 
                    id="FunctionItem Calculate_Caloeries_button" 
                    onClick={() => {
                        this.updateSelection("calculate_caloeries");
                    }}
                />
            </div>
        );
    }
}

/**
 * A function item
 */
class FunctionItem extends React.Component {

    render() {
        return (
            <button className={this.props.id} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

export default SideBar;