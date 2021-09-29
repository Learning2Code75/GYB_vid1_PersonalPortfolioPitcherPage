import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Pages/About';
import MyCreations from './Pages/MyCreations';
import Home from './Pages/Home'
import Social from './components/Social';

function App() {
  return (
    <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/mycreations" component={MyCreations} />
            </Switch>
            <div className="social">
              <Social />
            </div>
            
          </div>
    </Router>
    
  );
}

export default App;
