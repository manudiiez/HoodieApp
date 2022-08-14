import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const CartWidget = () => {

  const {cantInCart} = useContext(CartContext)

  return (
    <Container>
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Carrito</p>
        <p>{cantInCart}</p>
      </button>
      
      
    </Container>
  )
}

export default CartWidget

const Container = styled.div`
  
  &.active{
    opacity: .3;
  }

`


