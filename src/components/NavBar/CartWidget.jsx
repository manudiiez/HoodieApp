import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const CartWidget = () => {
  return (
    <CartContainer>
        <FontAwesomeIcon icon={faCartShopping} />
    </CartContainer>
  )
}

export default CartWidget

const CartContainer = styled.div`
  svg{
    font-size: 25px;
    color: #C94343;
  }

`