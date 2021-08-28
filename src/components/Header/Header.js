import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={require(`../../assets/img/amazon-logo.png`).default} className='logo'/>
            <div className='search'>
                <input className='search-input' type='text' />
            </div>
            <div className='nav'>
                
            </div>
        </div>

        
    )
}

export default Header
