import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product-info'>
                <p>Samsung Galaxy S21 5G 128GB in Phantom Black (Unlocked)</p>
                <p className='price'>
                    <small>$</small>
                    <strong>799.99</strong>
                </p>
                <div className='rating'>
                    <p>⭐</p>
                </div>
            </div>
            <img src={require('../../assets/img/galaxy.jpg').default} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
