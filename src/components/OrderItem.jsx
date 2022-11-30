import React from 'react'
import "../styles/OrderItem.scss"


const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="#" alt="close" />
		</div>
  )
}

export default OrderItem