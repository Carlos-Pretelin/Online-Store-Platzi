import React, { useContext, useState } from 'react'
import "../styles/Header.scss"
import AppContext from '../context/AppContext';
import Menu from "../components/Menu"
import MyOrder from "../containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {

  const [ toggle, setToggle ] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  // modo normal de llamar el estado "statee¿" del context que viene del hook useinitialstate
  //const {state} = useContext(AppContext);
  //Esta manera venia en los comentarios para directamente llamar al "cart" de nuestro estado 
  const {state:{cart}}=useContext(AppContext);

  const handleToggle = () =>{
    setToggle(!toggle);
  }



  return (
    <nav>
    <img src={menu} alt="menu" className="menu" />

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo" />

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li 
          className="navbar-email" 
          onClick={handleToggle}>
            carlosppretelin@gmail.com
        </li>

        <li 
          className="navbar-shopping-cart" 
          onClick={() => {setToggleOrder(!toggleOrder)}}>

            <img src={shoppingCart} alt="shopping cart" />
            {cart.length > 0 ? <div> {cart.length} </div>  : null}

        </li>

      </ul>
    </div>
    {toggle && <Menu/>}
    {toggleOrder && <MyOrder/>}
    
  </nav>
  )
}

export default Header