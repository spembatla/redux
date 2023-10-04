


const initialState ={
    num1: 0,
    num2: 0,
    result: 0
};

const reducer = (state = initialState , action) =>{
    switch (action.type){
        case "num1":
            return {...state, num1: action.payload};
         case "num2":
             return {...state, num2: action.payload};
        case "result":
             return {...state, result: action.payload};
            default:
                return state;
    }
}

export default reducer;


