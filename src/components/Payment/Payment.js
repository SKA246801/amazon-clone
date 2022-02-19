import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../utils/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Payment.css'

function Payment() {

    const [state, dispatch] = useStateValue()

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>Checkout (<Link to ='/checkout'>{state?.basket?.length} items</Link>)</h1>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{state?.user?.email}</p>
                    <p>123 testing avenue</p>
                    <p>Austin, TX</p>
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                    {state?.basket?.map(item => (
                        <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                        <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment