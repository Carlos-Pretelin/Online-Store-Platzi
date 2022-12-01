import React from 'react'
import "../styles/OrderItem.scss"
import xIcon from "@icons/icon_close.png";


const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={xIcon} alt="close" />
		</div>
  )
}

export default OrderItem