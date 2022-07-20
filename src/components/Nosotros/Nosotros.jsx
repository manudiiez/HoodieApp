import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import TextContainer from './TextContainer'

const Nosotros = () => {
  return (
    <Container className='container-lg py-5'>
      <div className="row mb-5">
        <p className='text-start h4'>NOSOTROS</p>
      </div>
      <NosotrosBody className="row">
        <TextContainer className="col-lg-6 col-12 dark p-5">
          <p className='h5'>¿Que somos?</p>
          <h1 className='h6 lh-lg text'>Somos un e-commerce de zapatillas, donde se pueden encontrar todo tipo de calzado, desde zapatillas para correr a zapatillas para bailar.</h1>
          
        </TextContainer>
        <TextContainer className="col-lg-6 col-12 light p-5">
          <p className='h5'>¿Que ofrecemos?</p>
          <h2 className='h6 lh-lg text'>Ofrecemos zapatillas de todas las marcas, tipos y tamaños. Tenemos convenios con las empresas mas grandes del mundo y los mejores precios estan en nuestro catalogo</h2>
        </TextContainer>
      </NosotrosBody>
    </Container>
  )
}

export default Nosotros

const Container = styled.div`
  
  

`

const NosotrosBody = styled.div`
  


`