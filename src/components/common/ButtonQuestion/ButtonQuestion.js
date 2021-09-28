import { Button } from "./ButtonQuestion.style"
import React,{ useContext } from 'react'
import StateAppContext from "../../../context/StateAppContext"
const ButtonQuestion = ({children, index}) => {
    const { dispatch } = useContext(StateAppContext) 
    const handlerClickCheckAnsware = () => {
        dispatch({type:"SAVE_ANSWARE", payload:{index}})
        dispatch({type:"INCREMENT_COUNTER_QUESTION"}) 
    }
    return (
        <Button onClick={handlerClickCheckAnsware}>
            {children}
        </Button>
    )
}

export default ButtonQuestion
