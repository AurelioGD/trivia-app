import { Route,Redirect } from "react-router";
import { useContext } from "react";
import StateAppContext from "../../../context/StateAppContext";
const PrivateQuestion = ({component,...props}) => {
    const { appState } = useContext(StateAppContext)
    if(!appState.nameUser) return (<Redirect to="/"/>)

    return (
        <Route component={component} {...props}/>
    )
}

export default PrivateQuestion
