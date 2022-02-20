import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../utils/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../utils/Reducer'
import axios from '../../utils/Axios'

function Payment() {

    const [state, dispatch] = useStateValue()
    const history = useHistory()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the stripe secret allowing us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(state) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [state?.basket])


    const handleSubmit = async e => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: '')
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment-price-container'>
                                <CurrencyFormat
                                    renderText={value => (
                                    <>
                                        <h3> Order Total: {value} </h3>
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(state)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 
                                    'Buy Now'}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment