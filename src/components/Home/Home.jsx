import React from 'react'
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import brand from '../../img/brandNew.jpg'
/* ------------------------------- COMPONENTES ------------------------------ */
import FacebookWidget from '../widget/FacebookWidget'
import InstagramWidget from '../widget/InstagramWidget'
import TwitterWidget from '../widget/TwitterWidget'
import WhatsAppWidget from '../widget/WhatsAppWidget'

const Home = () => {
  return (
    <Container>
      <div className="container-lg">
        <ContainerBrand className='row justify-content-center align-items-center'>
          <div className="col-lg-6 brand__title p-5">
            <p>Ofertas en buzos de adultos</p>
          </div>
          <div className="col-lg-6 brand__media">
            <ul>
              <li>
                <FacebookWidget/>
              </li>
              <li>
                <InstagramWidget/>
              </li>
              <li>
                <TwitterWidget/>
              </li>
              <li>
                <WhatsAppWidget/>
              </li>
            </ul>
          </div>
        </ContainerBrand>
        <div className="row">
          <ContainerTitle className="col-12 home__title">
            <h1>Hoodie<span>Shop</span> es un e-commerce de buzos en donde podras encontrar buzos de todos los estilos, tipos y tamaños. Nuestra tienda ofrece buzos de todas las marcas mas populares y grandes de la argentina.</h1>
          </ContainerTitle>
        </div>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  

`

const ContainerBrand = styled.div`

  .brand__title{
    background-image: url($brand);
  }

`

const ContainerTitle = styled.div`
  margin-top: 100px;
  h1{
    font-size: 20px;
    font-weight: normal;
    span{
      color: #C94343;
    }
  }

`