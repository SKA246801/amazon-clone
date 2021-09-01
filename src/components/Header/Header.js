import React from 'react'
import './Header.css'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={require(`../../assets/img/amazon-logo.png`).default} className='logo' alt='logo'/>
            </Link>
            <div className='search'>
                <input className='search-input' type='text' />
                <AiIcons.AiOutlineSearch className='search-icon'/>
            </div>
            <nav className='nav'>
                <div className='nav-option'>
                    <span className='option-line-one'>Hello Guest</span>
                    <span className='option-line-two'>Sign In</span>
                </div>
                <div className='nav-option'>
                    <span className='option-line-one'>Returns</span>
                    <span className='option-line-two'>& Orders</span>
                </div>
                <div className='nav-option'>
                    <span className='option-line-one'>Your</span>
                    <span className='option-line-two'>Prime</span>
                </div>
                <div className='basket'>
                    <Link to='/checkout'>
                        <ImIcons.ImCart style={{ color:'white' }}/>
                    </Link>
                    <span className='option-line-two basket-count'>0</span>
                </div>
            </nav>
        </div>
    )
}

export default Header
