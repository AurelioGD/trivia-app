import styled from "styled-components";

const QuestionContainer = styled.div`
    width: 50rem;
    height: 30rem;
`
const Question = styled.h2`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    color: #fff;
`
const AnswaresContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const FlexContainer = styled.div`
    display: flex;
`

export { QuestionContainer, Question, AnswaresContainer, FlexContainer };