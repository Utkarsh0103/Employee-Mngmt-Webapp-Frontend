//if any user is logged in or not...
export const isLoggedIn = () =>{
    let data = localStorage.getItem("data")
    if(data==null){
        return false
    }
    else{
        return true
    }
}

//set logged in user data to local Storage...
export const doLogIn = (data,next) =>{
    localStorage.setItem("data", JSON.stringify(data))
    next()
}

//get current logged in user data...
// export const getCurrentUserToken = () =>{
    
//     if(isLoggedIn){
//         return JSON.parse(localStorage.getItem("data")).token
//     }
//     else{
//         return false
//     }
// }

export const getUserID = () =>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user.id
    }
    else{
        return false
    }
}