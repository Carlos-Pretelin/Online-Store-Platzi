import React, { useContext } from 'react'
import "../styles/OrderItem.scss"
import xIcon from "@icons/icon_close.png";
import AppContext from '../context/AppContext';


const OrderItem = ({product, indexValue}) => {

	const {removeFromCart} = useContext(AppContext);

	const handleRemove = (index) =>{
		removeFromCart(index);
	}
  return (
    <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={xIcon} alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
  )
}

export default OrderItem