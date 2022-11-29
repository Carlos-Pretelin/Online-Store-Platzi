import React, {useState, useEffect} from 'react'
import "../styles/ProductList.scss"
import ProductItem from "../components/ProductItem"
import axios from "axios"
import useGetProducts from '../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products?limit=14&offset=1';

const ProductList = () => {

	const products = useGetProducts(API)

	// const getData = async ()=> {
	// 	const response = await axios.get(API);
	// 	setProducts(response.data)
	// 	console.log(response);
	// }

	// useEffect(async () => {
	// 	getData
	// }, [])


  return (
    <section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem key={product.id} />
				))}
				
			</div>
		</section>
  )
}

export default ProductList