import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateQuestion from "../components/CustomRoutes/PrivateQuestion/PrivateQuestion"
import FormName from "../components/layouts/FormName/FormName"
import QuestionLayout from "../components/layouts/QuestionLayout/QuestionLayout"
import Results from "../components/layouts/Results/Results"
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FormName}/>
                <PrivateQuestion exact path="/questions" component={QuestionLayout}/>
                <PrivateQuestion exact path="/results" component={Results}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
