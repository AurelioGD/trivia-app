import React,{ useContext } from 'react'
import StateAppContext from "../../../context/StateAppContext"
import { QuestionContainer, Question, AnswaresContainer, FlexContainer } from "./QuestionLayout.styles"
import allQuestions from "../../../bdQuestions/trivia.json"
import ButtonQuestion from "../../common/ButtonQuestion/ButtonQuestion"
const QuestionLayout = () => {

    const {appState,setAppState} = useContext(StateAppContext)
    const { answers, question } = allQuestions[appState.counterQuestion]
    
    return (
        <QuestionContainer>
            <Question>{question}</Question>
            <AnswaresContainer>
                <FlexContainer>
                    <ButtonQuestion index={0}>{answers[0]}</ButtonQuestion> 
                    <ButtonQuestion index={1}>{answers[1]}</ButtonQuestion> 
                </FlexContainer>
                <FlexContainer>
                    <ButtonQuestion index={2}>{answers[2]}</ButtonQuestion> 
                    <ButtonQuestion index={3}>{answers[3]}</ButtonQuestion>    
                </FlexContainer>
            </AnswaresContainer>
        </QuestionContainer>
    )
}

export default QuestionLayout
