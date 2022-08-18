import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
/* ---------------------------------- DATA ---------------------------------- */
import {data} from '../data/Data'
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

    const { categoryId } = useParams()

    // useEffect(() => {
    //     data
    //     .then((res)=> {
    //         if(categoryId){
    //             setListaBuzos(
    //                 res.filter((product) => product.marca.toLowerCase() === categoryId.toLowerCase())
    //             )
    //         }else{
    //             setListaBuzos(res)
    //         }
    //     })
    //     .catch(()=> console.log('hubo un error, intente mas tarde'))
    // }, [categoryId])

    const db = getFirestore()
    
    const getBuzos = () => {
        const itemsCollection = collection(db, 'itemCollection')
        getDocs(itemsCollection)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
                console.log(data)
                setListaBuzos(data)
                console.log(listaBuzos)
            })
            .catch((error) => console.log(error))
    }

    useEffect(()=>{
        getBuzos()

    }, [])

    useEffect(() => {
        console.log(categoryId)
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
        }else{
            getBuzos()
        }
      }, [categoryId])

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