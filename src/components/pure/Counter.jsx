import React, {useReducer, useContext} from 'react';

const Counter = () => {

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const RESET = 'RESET';

    const myContext = React.createContext(null);

    const Points = () => {
        const pointsState = useContext(myContext);
        return(
            <p>Points: {pointsState.count}</p>
        )
    }

    const initialState = {
        count: 0
    };

    //Reducer to change State
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state
        }
    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
            <div>
                <Points></Points>
                <button onClick={
                    () => dispatch({
                        type: INCREMENT,
                        payload: {
                            quantity: 1
                        }
                    })
                }>
                    INCREMENT
                </button>
                <button onClick={
                    () => dispatch({
                        type: DECREMENT,
                        payload: {
                            quantity: 2
                        }
                    })
                }>
                    DECREMENT
                </button>
                <button onClick={
                    () => dispatch({type: RESET})
                }>
                    RESET
                </button>
            </div>
        </myContext.Provider>
    );
}

export default Counter;
