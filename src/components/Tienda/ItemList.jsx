import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Item from './Item'

const ItemList = ({ arr }) => {

  return (
    <Container className='row justify-content-center px-3'>
      {
        arr.length === 0 ? 
        (
          <div className="d-flex justify-content-center my-5 py-5">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ):
        (
          arr.map((buzo)=> <Item key={buzo.id} className='col-md-3 mx-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' producto={buzo}/>)
        )
      }

    </Container>
  )
}

export default ItemList

const Container = styled.div`
    


`