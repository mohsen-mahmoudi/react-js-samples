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