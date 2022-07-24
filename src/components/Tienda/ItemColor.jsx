import React from 'react'
import styled from 'styled-components'

const ItemColor = ({color, title}) => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center col-3">
        <div style={{ backgroundColor: color }}></div>
        <p>{title}</p>
    </Container>
  )
}

export default ItemColor

const Container = styled.div`
    
    div{
        height: 25px;
        width: 25px;
        margin-bottom: 5px;
        border-radius: 50%;
    }

    p{
        color: #BABBC5;
    }

`