import React, {useState, useEffect} from 'react'
import "../styles/ProductList.scss"
import ProductItem from "../components/ProductItem"
import axios from "axios"
import useGetProducts from '../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products?limit=28&offset=1';

const ProductList = () => {

	const products = useGetProducts(API)

  return (
    <section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key={product.id} />
				))}
				
			</div>
		</section>
  )
}

export default ProductList