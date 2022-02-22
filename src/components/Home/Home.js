import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='background-img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='amazon prime background'/>
                <div className='home-row'>
                    <Product id='58762' title='Samsung Galaxy S21 5G 128GB in White (Unlocked)' price={799.99} image='galaxy.jpg' rating={5} />
                    <Product id='12548' title='Samsung Galaxy Buds Live, Mystic Black' price={169.99} image='galaxy-buds.jpg' rating={4} />
                </div>
                <div className='home-row'>
                    <Product id='96542' title='Samsung 55" TU7000 Crystal UHD 4K Smart TV (2020)' price={499.99} image='TV.jpg' rating={4} />
                    <Product id='35782' title='Samsung Galaxy Watch4, 40mm in Black, Bluetooth Smartwatch' price={249.99} image='watch.jpg' rating={3} />
                    <Product id='65992' title='Samsung Galaxy Book Pro 360' price={1199.99} image='galaxy-book.jpg' rating={5} />
                </div>
                <div className='home-row'>
                    <Product id='12545' title='Samsung 49" QLED Gaming Monitor' price={899.99} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
