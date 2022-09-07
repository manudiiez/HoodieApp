import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';
/* -------------------------------- FIREBASE -------------------------------- */
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
/* ------------------------------- COMPONENTES ------------------------------ */
import ItemList from './ItemList';
import Brand from './Brand/Brand';
import ItemFilterContainer from './ItemFilterContainer';


const ItemListContainer = () => {
    const [listaBuzos, setListaBuzos] = useState([]);

    const { categoryId, colorId, modeloId, estiloId } = useParams()

    const db = getFirestore()
    
    const getBuzos = () => {
      const itemsCollection = collection(db, 'itemCollection')
      getDocs(itemsCollection)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
          setListaBuzos(data)
        })
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        getBuzos()
    }, [])

    useEffect(() => {
        if (categoryId) {      
          const itemsCollectionQuery = query(
            collection(db, 'itemCollection'),
            where('marca', '==', categoryId)
          )
    
          getDocs(itemsCollectionQuery)
            .then((snapshot) => {
              const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              setListaBuzos(data)
            })
            .catch((error) => console.error(error))
        }
        else if (colorId) {      
            const itemsCollectionQuery = query(
              collection(db, 'itemCollection'),
              where('color', '==', colorId)
            )
      
            getDocs(itemsCollectionQuery)
              .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setListaBuzos(data)
              })
              .catch((error) => console.error(error))
        }
        else if (modeloId) {      
            const itemsCollectionQuery = query(
              collection(db, 'itemCollection'),
              where('modelo', '==', modeloId)
            )
      
            getDocs(itemsCollectionQuery)
              .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setListaBuzos(data)
              })
              .catch((error) => console.error(error))
        }
        else if (estiloId) {      
            const itemsCollectionQuery = query(
              collection(db, 'itemCollection'),
              where('estilo', '==', estiloId)
            )
      
            getDocs(itemsCollectionQuery)
              .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setListaBuzos(data)
              })
              .catch((error) => console.error(error))
        }
        else{
            getBuzos()
        }
    }, [categoryId, colorId, modeloId, estiloId])

    return (
        <Container>
            <div className="container-lg">
                <Brand title='Catalogo del dia' brand='NEW' />
                <div className="row mt-3">
                    <div className="col-md-3 col-12">
                        <ItemFilterContainer/>
                    </div>
                    <div className="col-md-9 col-12 tienda">
                        <ItemList items={listaBuzos}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemListContainer

const Container = styled.div`
    
    padding-top: 100px;
`