import { ButtonAgain, ResultsContainer, ScoreContainer, ScoreResult, Title } from "./Results.styles"
import { useContext } from "react"
import StateAppContext from "../../../context/StateAppContext"
import calculateScore from "./utils/calculateScore"
import allQuestions from "../../../bdQuestions/trivia.json"
const Results = () => {
    
    const { appState, dispatch } = useContext(StateAppContext)
    
    const allAnswares = appState.counterAnswares;
    const correctAnswares = allQuestions.map(question => question.correctAnswer)

    const score = calculateScore(allAnswares,correctAnswares)

    const handlerButtonBack = () => {
        dispatch({type:"RESET_STATE"})
    }



    return (
        <ResultsContainer>
            <ScoreContainer>
                <Title>Score</Title>
                <ScoreResult>{score}</ScoreResult>
                <ButtonAgain onClick={handlerButtonBack}>Try Again</ButtonAgain>
            </ScoreContainer>
        </ResultsContainer>
    )
}

export default Results
