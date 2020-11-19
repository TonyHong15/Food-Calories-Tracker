export const handleInputChange = (event, form) => {
    form.setState({
        [event.target.name]: event.target.value
    })
}
export const handleLogin = (form) => {
    
}


export const handleRegister = (form)=> {   
    const valid = validateEntries(form)
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

