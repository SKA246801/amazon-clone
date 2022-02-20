import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import Payment from './components/Payment/Payment'
import { auth } from './firebase'
import { useStateValue } from './utils/StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51KUzTfINUNqAnp2TBZtSbFt4iRbhoFpMqTiWY3ff0xkB7o8PsBFWoMhrkvEZLW5fQ1Erzm664nSFEC8Yy7FuBoZh00gZUG93mE')

function App() {

  const [state, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
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
