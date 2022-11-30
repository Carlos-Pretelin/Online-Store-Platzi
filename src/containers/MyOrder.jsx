import React, { useContext } from 'react'
import "../styles/MyOrder.scss"
import OrderItem from "../components/OrderItem"
import AppContext from '../context/AppContext'

const MyOrder = () => {

    const {state} = useContext(AppContext)

  return (
    <aside className="MyOrder">
    <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
    </div>
    <div className="my-order-content">
        
        {state.cart.map( (item)=> (
            <OrderItem product={item} key={`orderItem ${item.id}`}/>
        ))}
        
        <div className="order">
            <p>
                <span>Total</span>
            </p>
            <p>$560.00</p>
        </div>
        <button className="primary-button">
            Checkout
        </button>
    </div>
</aside>
  )
}

export default MyOrder