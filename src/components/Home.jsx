import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import Brand from './Brand/Brand'
import HomeCard from './HomeCard'
import Item from './Item'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */ 
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
/* -------------------------------- FIREBASE -------------------------------- */
import {getDocs, limit, query, collection, getFirestore} from 'firebase/firestore'

const Home = () => {

    const [newItems, setNewItems] = useState([]);

    const db = getFirestore()
    const navigate = useNavigate()

    const getNewItems = () => {
        const itemsCollectionQuery = query(
            collection(db, 'itemCollection'),
            limit(6)
        )
    
        getDocs(itemsCollectionQuery)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setNewItems(data)
            })
            .catch((error) => console.error(error))
    }

    const goToCatalog = () => {
        navigate('/')
    }

    useEffect(() => {
        getNewItems()
    }, [])

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
                <button className='btn btn-outline-light' onClick={goToCatalog}>Ir ahora</button>
            </HomeCard>
            <HomeCard className='col-md-5 mb-5 col-12 sweeterWhite'>
                <p className='py-5 h6'>Los mejores diseños</p>
                <button className='btn btn-outline-light mb-3' onClick={goToCatalog}>Ir ahora</button>
            </HomeCard>
            <HomeCard className='col-md-5 mb-5 col-12 gray'>
                <p className='h6'>Solo hoy</p>
                <p>Solo en nuestra tienda</p>
                <p className='h4 pb-3'>10% descuento</p>
                <p>Buzos <span className='fw-bold'>Black</span> and <span className='fw-bold'>White</span></p>
                <button className='btn btn-outline-dark' onClick={goToCatalog}>Ir ahora</button>
            </HomeCard>
            {newItems.length !== 0 && <Item item={newItems[0]} key={newItems[0].id} className='col-md-3 mx-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' />}
            {newItems.length !== 0 && <Item item={newItems[1]} key={newItems[1].id} className='col-md-3 mx-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' />}
            </div>
            
        </div>
        </Container>
    )
}

export default Home

const Container = styled.div`
  padding-top: 100px;

`
