import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='background-img' src={require('../../assets/img/Prime.jpg').default} alt='amazon prime background'/>
                <div className='home-row'>
                    <Product id='58762' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                    <Product id='12548' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                </div>
                <div className='home-row'>
                    <Product id='96542' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                    <Product id='35782' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                    <Product id='65992' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                </div>
                <div className='home-row'>
                    <Product id='12545' title='Samsung Galaxy S21+ 5G 128GB in Phantom Black (Unlocked)' price={799.99} image='galaxy.jpg' rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
