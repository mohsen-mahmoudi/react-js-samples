import { combineReducers } from "redux";
import { loading, users } from "./users";
import { post, posts } from "./posts";

// new way
export default combineReducers({
    users, loading, 
    posts, post
})


/* // old way

const initialState = {
    users: [],  // Holds user data
    loading: false, // Tracks loading state
    posts: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'users-data':
            return { ...state, users: action.payload };
        case 'users-loading':
            return { ...state, loading: action.payload };
        case 'posts-data':
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}
*/