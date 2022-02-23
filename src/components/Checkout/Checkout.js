import React from 'react'
import { useStateValue } from '../../utils/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    const [state , dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className='left'>
                <img className='checkout-ad' src={require('../../assets/img/Checkout-ad.jpg')} alt='ad' />
                <div>
                    <h2 className='title'>Your Shopping Basket</h2>
                    {state ? (
                     state.basket.map(item  => (
                         <CheckoutProduct 
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         image={item.image}
                         />
                     ))
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>

            <div className='right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout