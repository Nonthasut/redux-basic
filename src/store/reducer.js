import { actionTypes } from "./actionTypes"

const initialState = {
    counter:0
}

const reducer =(state = initialState,action)=> {
    if(action.type===actionTypes.INCREASE)
    return{
    ...state,
    counter: state.counter + 1
    }
    if(action.type===actionTypes.DECREASE)
    return{
    ...state,
    counter: state.counter - 1
    }
    if(action.type ===actionTypes.PLUS)
    return{
    ...state,
    counter: state.counter + 10
    }
    if(action.type === actionTypes.MINUS)
    return{
    ...state,
    counter: state.counter - 10
    }

    return state;
}

export default reducer;