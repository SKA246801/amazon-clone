import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from '../../utils/StateProvider'
import { db } from '../../firebase'
import Order from '../Order/Order'

function Orders() {

  const [orders, setOrders] = useState()
  const [state, dispatch] = useStateValue()
  
  useEffect(() => {
    if(state?.user) {

      db.collection('users').doc(state?.user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    } else {
      setOrders([])
    }
    }, [state?.user])
    
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='order-container'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
    </div>
  )
}

export default Orders