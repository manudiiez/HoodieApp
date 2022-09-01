import { useEffect, useState } from 'react'
/* -------------------------------- FIREBASE -------------------------------- */
import {query, where, getDocs, collection, getFirestore} from 'firebase/firestore'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemOrders from './ItemOrders'

const ItemAdminOrdersContainer = () => {

  const [listaOrdenes, setListaOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore()


  useEffect(() => {
    setLoading(true)
    const ordersCollection = collection(db, 'orders')
    getDocs(ordersCollection)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
      console.log(data)
      setListaOrdenes(data)
      console.log(listaOrdenes)
      setLoading(false)
    })
    .catch((error) => console.log(error)) 
  }, [])

  return (
    <Container>
      <div className="container-lg p-3">
        <p className='title'>Todos mis <span>pedidos</span></p>
        {
          loading ? (
            <div className="d-flex justify-content-center my-5 py-5">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ):(
            <ItemOrders arr={listaOrdenes} admin={true} />
          )
        }
      </div>
    </Container>
  )
}

export default ItemAdminOrdersContainer

const Container = styled.div`
  .title{
    font-size: 24px;
    span{
      color: #c94343;
      font-weight: bold;
    }
  }

`

