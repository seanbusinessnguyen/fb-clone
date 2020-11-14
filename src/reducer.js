
//Initial state of reducer
export const initialState = {
    user: null,
};

//Action into data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

//Return what it currently looks like with the user 
const reducer = (state, action) => {
    //console.log(action);
    
    switch (action.type) {
        case actionTypes.SET_USER:
            // console.log(action);
            return {
                ...state,
                user: action.user,
            };
        
        default:
            return state;
    }
};

export default reducer;
