import { Button } from "./ButtonQuestion.style"
import React,{ useContext } from 'react'
import StateAppContext from "../../../context/StateAppContext"
const ButtonQuestion = ({children, index}) => {
    const { appState, setAppState } = useContext(StateAppContext) 
    const handlerClickCheckAnsware = () => {
        const { counterAnswares } = appState;
        const newCounterAnswares = [...counterAnswares, index];
        setAppState({...appState,counterAnswares:newCounterAnswares,counterQuestion:appState.counterQuestion+1}) 

    }
    return (
        <Button onClick={handlerClickCheckAnsware}>
            {children}
        </Button>
    )
}

export default ButtonQuestion
