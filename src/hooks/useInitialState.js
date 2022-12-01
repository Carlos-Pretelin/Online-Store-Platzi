import { useState } from "react";

const initialState = {
    cart: [],
}


// este hook returna un estado y una funcion el esado inicial del estado pues es el objeto de arriba llamado initialstate

const useInitialState = () => {
   const [state, setState] = useState(initialState)

   const addToCart = (payload)=>{
    setState({
        ...state,
        cart: [...state.cart, payload]
    })
   }

   const removeFromCart = (payload) => {
    setState({
        ...state,
        cart: state.cart.filter( items => items !== payload)
    })
   }



   return{state, addToCart, removeFromCart}
}

export default useInitialState;
