import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import News from './components/News/News';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route>
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Route>
    </Router>
  )
}

export default App
