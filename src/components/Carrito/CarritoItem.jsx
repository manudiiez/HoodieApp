import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'



const CarritoItem = ({ producto }) => {
  return (
    <Container className="d-flex justify-content-between align-items-center py-2 ">
      {producto.name}
      <ItemCount stock={producto.stock} price={producto.price}/>
    </Container>
  )
}

export default CarritoItem

const Container = styled.li`
  
  border-top: 1px solid #BABBC5;
  border-bottom: 1px solid #BABBC5;

`
