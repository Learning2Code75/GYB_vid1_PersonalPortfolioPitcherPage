import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Social from './components/Social';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Samples from './components/Samples';

import PreprocessingTensorFlow from './components/projects/PreprocessingTensorFlow';
import EmailSpam from './components/projects/EmailSpam';

function App() {
  return (
    <Router>
          <div className="app">
            <Navbar />
            
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/resume" component={Resume} />
              <Route path="/PreprocessingTensorFlow" component={PreprocessingTensorFlow} />
              <Route path="/EmailSpam" component={EmailSpam} /> 
              <Route path="/Samples" component = {Samples} />
            </Switch>
            <Social />
            
          </div>
    </Router>
    
  );
}

export default App;
