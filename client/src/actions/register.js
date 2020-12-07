export const handleInputChange = (event, form) => {
    form.setState({
        [event.target.name]: event.target.value
    })
}
export const handleLogin = (form, app) => { //connect this login to server data
    if (form.state.username && form.state.password){
        const request = new Request("/api/login", {
            method: "post",
            body: JSON.stringify(form.state),
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
                else{
                    alert("invalid credentials")
                }
            })
            .then(json => {
                console.log(json._id)
                form.setState({
                    redirect: true
                })
                app.currentUser = json._id
                console.log(app.currentUser)
                
            })
            .catch(error => {
                console.log(error);
            });

    } 
    else{
        alert("Please fill out all required infromation")
    }    
}
                     


export const handleRegister = (form)=> {   
    const valid = validateEntries(form) // TODO connect this registration to server data
    if (valid){
        const request = new Request("/api/register", {
            method: "post",
            body: JSON.stringify(form.state),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
    
        // Send the request with fetch()
        fetch(request)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .catch(error => {
                console.log(error);
            });


        form.setState(
            {redirect: true}
        )
        alert("Successfully Created Account")
    } 
      
}
const validateEntries = (form) =>{
    const {username, password, firstName, lastName} = form.state
    if (!username || !password || !firstName || !lastName ){
        alert("Please fill out all required infromation")
        return false
        
    }
    return true
}

