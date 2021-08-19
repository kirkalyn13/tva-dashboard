import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/timeline">
          <Dashboard />
        </Route>
        <Route path="/tva">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
