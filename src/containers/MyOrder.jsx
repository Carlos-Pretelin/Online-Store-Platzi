import React, { useContext } from 'react'
import "../styles/MyOrder.scss"
import OrderItem from "../components/OrderItem"
import AppContext from '../context/AppContext'
import arrowIcon from "@icons/flechita.svg";

const MyOrder = () => {

    const {state} = useContext(AppContext)
    // acc Acumulator  cur CurrentValue
    const sumTotal = ()=> {
        const reducer = (acc, cur) => acc + cur.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
  return (
    <aside className="MyOrder">
    <div className="title-container">
        <img src={arrowIcon} alt="arrow" />
        <p className="title">My order</p>
    </div>
    <div className="my-order-content">
        
        {state.cart.map( (item, index)=> (
            <OrderItem product={item}  indexValue={index}/>
        ))}
        
        <div className="order">
            <p>
                <span>Total</span>
            </p>
            <p>$ {sumTotal()}</p>
        </div>
        <button className="primary-button">
            Checkout
        </button>
    </div>
</aside>
  )
}

export default MyOrder