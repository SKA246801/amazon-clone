import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase.js'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        })
        .catch(e => alert(e.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
            <img src={require('../../assets/img/login-logo.jpg')} className='login-logo'/>
            </Link>
            <div className='login-container'>
                <h1>Sign in</h1>

                <form className='login-form'>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login-sign-in' onClick={signIn}>Sign In</button>
                </form>
                <p className='terms'>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale/ Please see our Privacy Notice,
                    our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                
                <button className='login-register' onClick={register} >Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login