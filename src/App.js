import { AppContainer } from "./App.styles"
import FormName from "./components/layouts/FormName/FormName";
import Router from "./Router/Router";
import {StateAppContext} from "./context/StateAppContext"
function App() {
  return (
    <StateAppContext>
      <AppContainer>
        <Router/>
      </AppContainer>
    </StateAppContext>
  );
}

export default App;
