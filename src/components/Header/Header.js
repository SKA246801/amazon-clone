import React from 'react'
import './Header.css'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../utils/StateProvider'
import { auth } from '../../firebase'

function Header() {
    const [state, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (state.user) {
            auth.signOut()
        }
    }
    
    return (
        <div className='header'>
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='logo' alt='logo'/>
            </Link>
            <div className='search'>
                <input className='search-input' type='text' />
                <AiIcons.AiOutlineSearch className='search-icon'/>
            </div>
            <nav className='nav'>
                <Link to={!state?.user && '/login'}>
                    <div onClick={handleAuthentication} className='nav-option'>
                        <span className='option-line-one'>{state?.user ? `Hello ${state.user.email}` : 'Hello Guest' }</span>
                        <span className='option-line-two'>{state?.user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='nav-option'>
                        <span className='option-line-one'>Returns</span>
                        <span className='option-line-two'>& Orders</span>
                    </div>
                </Link>
                <div className='nav-option'>
                    <span className='option-line-one'>Your</span>
                    <span className='option-line-two'>Prime</span>
                </div>
                <div className='basket'>
                    <Link to='/checkout'>
                        <ImIcons.ImCart style={{ color:'white' }}/>
                    </Link>
                    {state ? (
                            <span className='option-line-two basket-count'>{state.basket.length}</span>
                        ) : (
                            <span className='option-line-two basket-count'>0</span>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header
