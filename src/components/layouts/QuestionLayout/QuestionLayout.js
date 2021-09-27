import React,{ useContext } from 'react'
import StateAppContext from "../../../context/StateAppContext"
import { QuestionContainer, Question, AnswaresContainer, FlexContainer } from "./QuestionLayout.styles"
import allQuestions from "../../../bdQuestions/trivia.json"
import ButtonQuestion from "../../common/ButtonQuestion/ButtonQuestion"
import { Redirect } from 'react-router'
const QuestionLayout = () => {

    const { appState } = useContext(StateAppContext)

    const { counterQuestion } = appState;

    if(!allQuestions[counterQuestion]) return (<Redirect to="/results"/>)

    const { answers, question } = allQuestions[counterQuestion]
    
    return (
        <QuestionContainer>
            <Question>{`${counterQuestion+1}. ${question}`}</Question>
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
