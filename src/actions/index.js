import fetch from 'cross-fetch';

export function getPosts(data){
    // console.log("here1")
    return{
        type: "POST_DETAILS",
        payload : data
    };
}

export function getPublicBoards(data){
    return{
        type: "PUBLIC_BOARD_DETAILS",
        payload : data
    }
}

export function getPostsDetails(){
    const URL="http://192.168.20.87:8002/boards/showboards";
    // console.log("here")
    return function (dispatch) {
        // console.log("1")
        return fetch(URL)
        .then(
            response => response.json(),
            error => console.log("An Error Occured",error)
        )
        .then(
            
            data=>{
                // console.log(data)
                dispatch(getPosts(data));
            },
            error=>console.log("An Error Occured",error)
        )
    }
}

export function getPublicPostsDetails(){
    const URL="http://192.168.20.87:8002/boards/showboards/public";
    // console.log("here")
    return function (dispatch) {
         console.log("1")
        return fetch(URL)
        .then(
            response => response.json(),
            error => console.log("An Error Occured",error)
        )
        .then(
            
            data=>{
                // console.log(data)
                dispatch(getPublicBoards(data));
            },
            error=>console.log("An Error Occured",error)
        )
    }
}

export function getLogin(data){
    // console.log("here1")
    return{
        type: "LOGIN_DETAILS",
        payload : data
    };
}

export function getLoginDetails(){
    const URL="http://192.168.20.87:8003/register/login";
    // console.log("here")
    return function (dispatch) {
        // console.log("1")
        return fetch(URL)
        .then(
            response => response.json(),
            error => console.log("An Error Occured",error)
        )
        .then(
            
            data=>{
                // console.log(data)
                dispatch(getPosts(data));
            },
            error=>console.log("An Error Occured",error)
        )
    }
}
