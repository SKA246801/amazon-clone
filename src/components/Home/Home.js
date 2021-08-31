import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='background-img' src={require('../../assets/img/Prime.jpg').default} />
                <div className='home-row'>
                    <Product />
                    <Product />
                </div>
                <div className='home-row'>

                </div>
                <div className='home-row'>

                </div>
            </div>
        </div>
    )
}

export default Home
