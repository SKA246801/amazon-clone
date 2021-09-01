import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
