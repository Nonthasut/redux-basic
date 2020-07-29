const initialState = {
    counter:0
}

const reducer =(state = initialState,action)=> {
    if(action.type==='INCREASE')
    return{
    ...state,
    counter: state.counter + 1
    }
    if(action.type==='DECREASE')
    return{
    ...state,
    counter: state.counter - 1
    }
    if(action.type ==='PLUS')
    return{
    ...state,
    counter: state.counter + 10
    }
    if(action.type === 'MINUS')
    return{
    ...state,
    counter: state.counter - 10
    }

    return state;
}

export default reducer;