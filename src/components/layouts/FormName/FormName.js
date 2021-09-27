import React,{ useState, useContext } from 'react'
import { Form, FormContainer, Input, InputSubmit } from "./FormName.styles"
import StateAppContext from "../../../context/StateAppContext"
import { useHistory } from 'react-router'


const FormName = () => {
    const [name, setName] = useState("")
    const { appState,setAppState } = useContext(StateAppContext)
    const history = useHistory();
    const handlerChange = (e) => {
        setName(e.target.value)
    }

    const handlerForm = (e) => {
        e.preventDefault()
        setAppState({...appState,nameUser:name})
        history.push("/questions")
    }

    return (
        <FormContainer>
            <Form onSubmit={handlerForm}>
                <Input type="text" placeholder="type your name..." onChange={handlerChange} value={name}/>
                <InputSubmit type="submit" value="Start"/>
            </Form>
        </FormContainer>
    )
}

export default FormName