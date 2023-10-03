


const initialState ={
    isLoading: false,
    items: [],
    hasError: false
};

const Reducer = (state = initialState , action) =>{
    switch (action.type){
        case "ITEMS_REQUEST":
            return Object.assign({}, state, {
                isLoading: action.Loading
            })
            default:
                return state;
    }
}

export default Reducer;


