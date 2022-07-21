import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* --------------------------------- IMAGES --------------------------------- */
import bg from '../../img/bgWhite.jpg'
/* ------------------------------- COMPONENTES ------------------------------ */
import TextContainer from './TextContainer'

const Nosotros = () => {
  return (
    <Container className='container-lg py-5'>
      <div className="row mb-5">
        <p className='text-start h4'>NOSOTROS</p>
      </div>
      <NosotrosBody>
        <div className="container__bg p-5 row">
          <TextContainer className="col-lg-6 col-12 light p-5">
            <p className='h5'>¿Quienes somos?</p>
            <h1 className='h6 lh-lg text'>ShoesApp es un e-commerce de calzados, en donde se puede encontrar todo tipo de calzados, dedse botines, a zapatillas para correr y jugar al basquet.</h1>

            <p className='h5 mt-5'>¿Que ofrecemos?</p>
            <h2 className='h6 lh-lg text'>Ofrecemos un aplio catalogo con calzados de todas las marcas, tamaños y colores. Tenemos convenios con las empresas mas grandes en el mercado del calzado, por lo tanto ofrecemos los mejores precios y ofertas</h2>
            
          </TextContainer>
          <TextContainer className="col-lg-6 col-12 dark p-5">
            <p className='h5'>¿Quiero comprar?</p>
            <h2 className='h6 lh-lg text'>Para comprar dentro de nuestra pagina debes dirigirte a la seccion <span>Tienda</span> en donde encontraras un amplio catalogo de productos. Desde esa seccion se puede filtrar por nombre, marca o categoria para que puedas encontrar tu calzado ideal al mejor precio</h2>
            <p className='h5 mt-5'>¿Quiero vender?</p>
            <h2 className='h6 lh-lg text'>Para vender productos en nuestra tienda, debes tener una marca propia y ofrecer productos nuevos, y que cuenten con distintos talles.</h2>
          </TextContainer>
          
        </div>
      </NosotrosBody>
    </Container>
  )
}

export default Nosotros

const Container = styled.div`
  

`

const NosotrosBody = styled.div`
  .container__bg{
    background: url('${bg}');
  }

`