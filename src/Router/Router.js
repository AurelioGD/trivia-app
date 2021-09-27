import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateQuestion from "../components/CustomRoutes/PrivateQuestion/PrivateQuestion"
import FormName from "../components/layouts/FormName/FormName"
import QuestionLayout from "../components/layouts/QuestionLayout/QuestionLayout"
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FormName}/>
                <PrivateQuestion exact path="/question" component={QuestionLayout}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
