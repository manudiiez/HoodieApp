import React from 'react'
import styled from 'styled-components'

const ItemAboutusContainer = () => {
  return (
    <Container className='container-lg'>
      <div className="row m-0 p-0">
        <div className="col-12 mt-5">
          <div className='main__text '>
            <h1 className='text'>HoddieShop es una tienda online de buzos. Nuestro objetivo es proporcionarle al cliente un sitio seguro en donde pueda encontrar buzos de todas las marcas, estilos y colores. </h1>  
          </div>
        </div>
        <div className='col-lg-6 col-12 mt-3'>
          <div className='main__text red'>
            <h2 className='text'>Nuestro objetivo es proporcionarle al cliente un sitio seguro en donde pueda encontrar buzos de todas las marcas, estilos y colores. </h2>  
          </div>  
        </div>
        <div className='col-lg-6 col-12 mt-3'>
          <div className='main__text red'>
            <h2 className='text'>Ademas ofrecemos un seguimiento del pedido en donde podes ver el estado del producto en todo momento</h2>  
          </div>  
        </div>
        <div className='col-12 mt-3'>
          <div className='main__text'>
            <p className='text m-0'>Nuestas ventajas</p>  
          </div>  
        </div>
        <div className='col-12 mt-3'>
          <div className='main__text ventaja'>
            <h3 className='text m-0'>Buzos con los mejores precios</h3>  
          </div>  
        </div>
        <div className='col-12 mt-3'>
          <div className='main__text ventaja'>
            <h3 className='text m-0'>El mejor catalogo</h3>  
          </div>  
        </div>
        <div className='col-12 mt-3'>
          <div className='main__text ventaja'>
            <h3 className='text m-0'>El mejor sistema de compras</h3>  
          </div>  
        </div>
      </div>   
    </Container>
  )
}

export default ItemAboutusContainer

const Container = styled.div`

    .main__text{
      background-color: #e9eaed;
      border-radius: 10px;
      padding: 30px 20px;
      height: 100%;
      .text{
        font-size: 18px;
        text-align: center;
        font-weight: normal;

      }

      &.red{
        background-color: #c94343;
        color: #fff;
      }
      
      &.gray{
        background-color: #babbc5;
      }

      &.ventaja{
        padding: 10px 20px;
      }

    }

`