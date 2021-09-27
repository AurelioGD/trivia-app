import React,{ useState } from 'react'

const Context = React.createContext({})

const StateAppContext = ({children}) => {
    const [appState, setAppState] = useState({nameUser:null,counterQuestion:0,counterAnswares:[]})
    return (
        <Context.Provider value={{appState,setAppState}}>
            {children}
        </Context.Provider>
    )
}
export { StateAppContext }
export default Context;