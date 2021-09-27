import React,{ useState } from 'react'

const Context = React.createContext({})

const valueDefault = {
    nameUser: null,
    counterQuestion: 0,
    counterAnswares: []
}

const StateAppContext = ({children}) => {
    const [appState, setAppState] = useState(valueDefault)

    return (
        <Context.Provider value={{appState,setAppState}}>
            {children}
        </Context.Provider>
    )
}
export { StateAppContext }
export default Context;