import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
/* ------------------------ <COMPONENTS></COMPONENTS> ----------------------- */


const CartWidget = ({click}) => {

  return (
    <>
      <button onClick={click} >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Carrito</p>
      </button>
      
      
    </>
  )
}

export default CartWidget



