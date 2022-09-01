import { useEffect, useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom'

const ItemAdminContainer = () => {

  const navigate = useNavigate()

  

  return (
    <Container className='container-lg py-5 px-3'>
      <p className='title'>Panel de <span>Administrador</span></p>
      <div className="row m-0 p-0">
        <ButtonContainer className="col-md-6 col-12 d-flex justify-content-center align-items-center p-5 button my-3" onClick={() => {navigate('/adminOrders')}}>
          <p className='m-0 my-5'>Pedidos</p>
        </ButtonContainer>
        <ButtonContainer className="col-md-6 col-12 d-flex justify-content-center align-items-center p-5 button" onClick={() => {navigate('/adminList')}}>
          <p className='m-0 my-5'>Productos</p>
        </ButtonContainer>
      </div>
    </Container>
  )
}

export default ItemAdminContainer

const Container = styled.div`

  .title{
    font-size: 26px;
    text-align: center;

    span{
      color: #c94343;
      font-weight: bold;
    }
  }

`


const ButtonContainer = styled.div`
  
  background-color: #e9eaed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all .3s ease-in-out;

  p{
    font-size: 18px;
    font-weight: 500;
  }
  
  &:hover{
    background-color: #c94343;
    color: #e9eaed;
  }

`