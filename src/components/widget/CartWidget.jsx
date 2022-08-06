import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
/* ------------------------ <COMPONENTS></COMPONENTS> ----------------------- */


const CartWidget = () => {

  const {cantInCart} = useContext(CartContext)

  return (
    <>
      <button >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Carrito</p>
        <p>{cantInCart}</p>
      </button>
      
      
    </>
  )
}

export default CartWidget


