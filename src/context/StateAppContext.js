import React,{ useReducer } from 'react'

const Context = React.createContext({})

const initialState = {
    nameUser: null,
    counterQuestion: 0,
    counterAnswares: []
}

const reducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "CHANGE_NAME":
            return {...state, nameUser:payload.name}
        case "INCREMENT_COUNTER_QUESTION":
            const { counterQuestion } = state;
            return{
                ...state,
                counterQuestion:counterQuestion+1
            }
        case "SAVE_ANSWARE":
            const { counterAnswares } = state;
            return{
                ...state,
                counterAnswares:[...counterAnswares, payload.index]
            }
        case "RESET_STATE":
            return{
                ...initialState
            }

        default:

    }
}

const StateAppContext = ({children}) => {
    const [appState, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{appState,dispatch}}>
            {children}
        </Context.Provider>
    )
}
export { StateAppContext }
export default Context;