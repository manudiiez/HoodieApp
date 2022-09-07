import { useEffect, useState } from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { useAuth } from '../context/AuthContext'
/* -------------------------------- FIREBASE -------------------------------- */
import {query, where, getDocs, collection, getFirestore} from 'firebase/firestore'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
import ItemOrders from './ItemOrders'

const ItemOrdersContainer = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user} = useAuth()
  const db = getFirestore()

  useEffect(() => {
    setLoading(true)
    const ordersCollectionQuery = query(
      collection(db, 'orders'),
      where('buyer.uid', '==', user.uid)
    )

    getDocs(ordersCollectionQuery)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setOrders(data)
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <Container>
      <div className="container-lg p-3">
        <p className='title'>Mis <span>ordenes:</span></p>
        {
          loading ? (
            <div className="d-flex justify-content-center my-5 py-5">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ):(
            <ItemOrders arr={orders} admin={false} />
          )
        }
      </div>
    </Container>
  )
}

export default ItemOrdersContainer

const Container = styled.div`
  
  .title{
    font-size: 24px;
    span{
      color: #c94343;
      font-weight: bold;
    }
  }

`