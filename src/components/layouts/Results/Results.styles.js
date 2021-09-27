import styled from "styled-components";

const ResultsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: radial-gradient(circle at 114.09% 20.12%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);
`
const InfoContainer = styled.div`

`
const ScoreContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`
const TimeContainer = styled.div`

`
const Title = styled.h2`
    font-family: "Lobster", cursive;
    font-size: 7rem;
    margin: 0;
    color: #424242;
`
const ScoreResult = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 4rem;
    margin: 0;
    color: #424242;
`
const ButtonAgain = styled.button`
    font-family: "Roboto", sans-serif;
    width: 8rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    background-color: #0d47a1;
    color: #fff;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`
export { ResultsContainer, InfoContainer, ScoreContainer, TimeContainer, Title, ScoreResult, ButtonAgain }