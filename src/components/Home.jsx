import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import Brand from './Brand/Brand'
import HomeCard from './HomeCard'

const Home = () => {

  return (
    <Container>
      <div className="container-lg">
        <Brand title='Ofertas en buzos de adultos'/>
        <div className="row justify-content-around p-4">
          <HomeCard className='col-md-5 mb-5 col-12'>
            <p className='h6'>Solo hoy</p>
            <p>Solo en nuestra tienda</p>
            <p className='h4 pb-3'>20% descuento</p>
            <p>Buzos y <span className='fw-bold'>Nike</span></p>
            <button className='btn btn-outline-light'>Ir ahora</button>
          </HomeCard>
          <HomeCard className='col-md-5 mb-5 col-12 sweeterWhite'>
            <p className='py-5 h6'>Los mejores diseños</p>
            <button className='btn btn-outline-light mb-3'>Ir ahora</button>
          </HomeCard>
          <HomeCard className='col-md-5 mb-5 col-12 gray'>
            <p className='h6'>Solo hoy</p>
            <p>Solo en nuestra tienda</p>
            <p className='h4 pb-3'>10% descuento</p>
            <p>Buzos <span className='fw-bold'>Black</span> and <span className='fw-bold'>White</span></p>
            <button className='btn btn-outline-dark'>Ir ahora</button>
          </HomeCard>
        </div>
        
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding-top: 100px;

`
