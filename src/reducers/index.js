import { combineReducers } from 'redux'


export function publicDataRetreival(data = [], action) {
    if (action.type === 'PUBLIC_BOARD_DETAILS') {
        console.log(data)
        data = action.payload;
        // console.log("ab");
        // console.log(data);
        return data;
    }

    return data;

}

export function showPostsReducer(posts = [], action){
    if(action.type=='SHOW_POSTS'){
            posts=action.payload;
            return posts;
    }
    return posts;
}

export function postsDataRetrival(data = [], action) {
    if (action.type === 'POST_DETAILS') {
        data = action.payload;
        // console.log("ab");
        // console.log(data);
        return data;
    }

    return data;
}

export function usersDataRetrival(data = [], action) {
   // console.log("data")
    if(action.type === "USER_DETAILS") {
        console.log("ab");
        data = action.payload;
        return data;
    }

    return data
}


export default combineReducers({
    postFromReducer : showPostsReducer,
    postsdata: postsDataRetrival,
    usersdata : usersDataRetrival,
    publicPostsData: publicDataRetreival
});
