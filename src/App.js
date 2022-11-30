import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Dashboard />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
