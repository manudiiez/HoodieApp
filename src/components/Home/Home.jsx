import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import BoxOffer from './BoxOffer'
import Brand from '../Utils/Brand'
import Item from '../Tienda/Item'
import { data } from '../../data/Data'

const Home = () => {

  const [listaBuzos, setListaBuzos] = useState([]);

  useEffect(()=>{

    data
    .then((res)=> setListaBuzos(res))
    .catch(()=> console.log('hubo un error, intente mas tarde'))

  }, [])

  console.log(listaBuzos)

  return (
    <Container>
      <div className="container-lg">
        <Brand title='Ofertas en buzos de adultos'/>
        <div className="row justify-content-around p-4">
          <BoxOffer className='col-md-5 mb-5 col-12'>
            <p className='h6'>Solo hoy</p>
            <p>Solo en nuestra tienda</p>
            <p className='h4 pb-3'>20% descuento</p>
            <p>Buzos <span className='fw-bold'>Adidas</span> y <span className='fw-bold'>Nike</span></p>
            <button className='btn btn-outline-light'>Ir ahora</button>
          </BoxOffer>
          <BoxOffer className='col-md-5 mb-5 col-12 sweeterWhite'>
            <p className='py-5 h6'>Los mejores diseños</p>
            <button className='btn btn-outline-light mb-3'>Ir ahora</button>
          </BoxOffer>
          <BoxOffer className='col-md-5 mb-5 col-12 gray'>
            <p className='h6'>Solo hoy</p>
            <p>Solo en nuestra tienda</p>
            <p className='h4 pb-3'>10% descuento</p>
            <p>Buzos <span className='fw-bold'>Black</span> and <span className='fw-bold'>White</span></p>
            <button className='btn btn-outline-dark'>Ir ahora</button>
          </BoxOffer>
          {listaBuzos.length && <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[0]}/>}
          {listaBuzos.length && <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[5]}/>}

        </div>
        {
          listaBuzos.length === 0 ?
          (
            <p>...loading</p>
          ):(
            <div className="row justify-content-around px-4">
              <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[1]}/>
              <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[2]}/>
              <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[3]}/>
              <Item className='col-md-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={listaBuzos[4]}/>
            </div>
          )
        }
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding-top: 100px;

`

const ContainerBrand = styled.div`

  

`
