import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
     <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
          </Route>
        </Switch>
     </Router>
  );
}

export default App;
