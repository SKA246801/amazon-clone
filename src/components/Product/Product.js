import React from 'react'
import './Product.css'
import { useStateValue } from '../../utils/StateProvider'

function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product' >
            <div className='product-info'>
                <p>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
            </div>
            <img className='product-img' src={require(`../../assets/img/${image}`).default} alt=''/>
            <button onClick={addToBasket} className='basket-btn'>Add to Basket</button>
        </div>
    )
}

export default Product
