const initialState = {
    users: [],  // Holds user data
    loading: false, // Tracks loading state
  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'users-data':
            return { ...state, users: action.payload };
        case 'users-loading':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}