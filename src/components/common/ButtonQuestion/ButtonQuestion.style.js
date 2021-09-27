import styled from "styled-components";

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 1.8rem;
    width: 15rem;
    height: 7rem;
    border: none;
    border-radius: 1rem;
    margin: 1rem;
    background-color: #c2185b;
    transition: font-size 0.1s ease-in-out;
    cursor: pointer;
    &:hover{
        font-size: 2rem;
    }
`

export { Button }