import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
/* ------------------------ <COMPONENTS></COMPONENTS> ----------------------- */


const CartWidget = () => {

  return (
    <>
      <button >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Carrito</p>
      </button>
      
      
    </>
  )
}

export default CartWidget


