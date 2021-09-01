import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='left'>
                <img className='checkout-ad' src={require('../../assets/img/Checkout-ad.jpg').default} alt='ad' />
                <div>
                    <h2 className='title'>Your Shopping Basket</h2>
                </div>
            </div>

            <div className='right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
