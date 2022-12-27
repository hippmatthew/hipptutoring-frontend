import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
