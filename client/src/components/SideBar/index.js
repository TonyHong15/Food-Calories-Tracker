import React from 'react'
import "./styles.css"
import {Link} from 'react-router-dom'

/**
 * A menu with Side Bar where user can choose functionality
 *
 * Props: 
 * - selectFunctionality: a callback function to update the type of funtionality user choose
 */
class SideBar extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        image: null,
        image_src: null
    };

        this.onImageChange = this.onImageChange.bind(this);
        this.onImageChange.bind(this)
        this.updateSelection.bind(this);
    }
    
    //change the selected type
    updateSelection(selectedType) {
        this.props.selectFunctionality(selectedType);
    }
    
    //upload the image from the computer
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            this.setState({
                image: img,
                image_src: URL.createObjectURL(img)
            });
        }
    };

    //log out function
    logOut = () =>{
        window.sessionStorage.clear()
        window.location.reload()
    }
    
    //get picture from server
    updateImage() {
        // picture is saved in /api/users/(current user)
        const request = new Request('/api/users/'+ this.props.appState.currentUser, {
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
                console.log(json.picture)
                this.setState(
                    {image_src: json.picture}
                )
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.image)
        console.log(this.state.image_src)
        return (
            <div class="SideBar">
                <img className="Side_Bar_Profile_Pic" src={this.state.image_src} />
            
                <label for="profile_image_upload_button" className="profile_image_upload_button">
                </label>
            
                <form className="profile_image_upload" action="image upload">
                    <input
                        id="profile_image_upload_button"
                        ref={this.inputRef}
                        type="file"
                        accept="image/*"
                        name="fileupload"
                        onChange={this.onImageChange}
                    />
                </form>
                
                <FunctionItem
                    text="My Dashboard" 
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
                    text="Calculate Calories" 
                    id="FunctionItem Calculate_Calories_button" 
                    onClick={() => {
                        this.updateSelection("calculate_calories");
                    }}
                />

                <Link className="FunctionItem Log_Out_button"
                    to="./LandingPage" 
                    onClick={() => {
                        this.logOut();
                    }}>
                    Log Out
                </Link>
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