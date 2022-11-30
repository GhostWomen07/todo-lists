import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Notes from './scenes/Notes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
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
