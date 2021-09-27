import { ButtonAgain, ResultsContainer, ScoreContainer, ScoreResult, Title } from "./Results.styles"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import StateAppContext from "../../../context/StateAppContext"
import calculateScore from "./utils/calculateScore"
import allQuestions from "../../../bdQuestions/trivia.json"
const Results = () => {
    
    const history = useHistory()
    const { appState, setAppState } = useContext(StateAppContext)
    
    const allAnswares = appState.counterAnswares;
    const correctAnswares = allQuestions.map(question => question.correctAnswer)

    const score = calculateScore(allAnswares,correctAnswares)

    const handlerButtonBack = () => {
        setAppState({
            nameUser: null,
            counterQuestion: 0,
            counterAnswares: []
        })
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
