import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route> 
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App
