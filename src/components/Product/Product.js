import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img className='product-img'src={require(`../../assets/img/${image}`).default} alt=''/>
            <button className='basket-btn'>Add to Basket</button>
        </div>
    )
}

export default Product
