import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 20rem;    
    border-radius: 1rem;
    background-color: #fff;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
`
const Input = styled.input`
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    font-family: "Roboto", sans-serif;
    outline: none;
    border: 1px solid #424242;
    border-radius: 0.5rem;
    font-size: 1.2rem;
`
const InputSubmit = styled.input`
    font-family: "Roboto", sans-serif;
    width: 8rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #424242;
    color: #fff;
`
export { FormContainer, Form, Input, InputSubmit }