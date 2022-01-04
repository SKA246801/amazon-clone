import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../utils/StateProvider'

function CheckoutProduct({ id, image, title, price, rating}) {

    const [state , dispatch] = useStateValue()


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout-product'>
            {/* <img src={require(`../../assets/img/${image}`).default} alt='' className='checkout-img' /> */}
            <div className='checkout-img'>some words</div>
            <div className='info'>
                <p className='title'>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                <button className='btn' onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct