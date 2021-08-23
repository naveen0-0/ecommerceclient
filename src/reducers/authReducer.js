const initialvalue = {
    username : "",
    email : "",
    loggedIn:false
}

export const authReducer = (state=initialvalue,action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return action.payload
    
        default:
            return state
    }
}