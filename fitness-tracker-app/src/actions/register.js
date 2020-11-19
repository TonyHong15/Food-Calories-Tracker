export const handleInputChange = (event, form) => {
    form.setState({
        [event.target.name]: event.target.value
    })
}
export const handleLogin = (form) => { //connect this login to server data
    if (form.state.username && form.state.password){
        form.setState(
            {redirect: true}
        )
    } 
    else{
        alert("Please fill out all required infromation")
    }    
}
                     


export const handleRegister = (form)=> {   
    const valid = validateEntries(form) // TODO connect this registration to server data
    if (valid){
        form.setState(
            {redirect: true}
        )
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

