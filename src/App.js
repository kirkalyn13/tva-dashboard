import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import About from './routes/About'
import NotFound from './routes/NotFound'
import WorldTree from './routes/WorldTree'

const WithNav = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WithNav><Home /></WithNav>
          </Route>
          <Route path="/timeline">
            <WithNav><Dashboard /></WithNav>
          </Route>
          <Route path="/tva">
            <WithNav><About /></WithNav>
          </Route>
          <Route path="/world-tree">
            <WorldTree />
          </Route>
          <Route>
            <WithNav><NotFound /></WithNav>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;