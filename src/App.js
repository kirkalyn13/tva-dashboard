import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import About from './routes/About'
import Dashboard from './routes/Dashboard'


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
