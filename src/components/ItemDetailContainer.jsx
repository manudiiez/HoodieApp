import React,{useState,useEffect} from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from 'react-router-dom'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* -------------------------------- FIREBASE -------------------------------- */
import { getFirestore, doc, getDoc, limit, getDocs, query, collection } from "firebase/firestore";
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemDetail from './ItemDetail'
import Item from './Item'
import Brand from './Brand/Brand'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [newItems, setNewItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams()
    const db = getFirestore()


    const getNewItems = () => {
        const itemsCollectionQuery = query(
            collection(db, 'itemCollection'),
            limit(4)
        )
    
        getDocs(itemsCollectionQuery)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setNewItems(data)
            })
            .catch((error) => console.error(error))
    }

    useEffect(()=>{    
        setLoading(true)
        const docRef = doc(db, 'itemCollection', itemId)
        getDoc(docRef)
          .then((snapshot) => {
            if(snapshot.exists()){
              const data = {
                id: snapshot.id,
                ...snapshot.data()
              }
              setItem(data)
              setLoading(false)
            }else{
                console.log('no existe')
                setLoading(false)
            }
          })
          .catch((error) => console.log(error))
    }, [itemId])

    useEffect(() => {
        getNewItems()
    }, [])

    return (
        <Container className='container-lg p-5'>
            {
                loading ? 
                (
                    <div className="d-flex justify-content-center my-5 py-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ):
                (
                    <div className='p-0 m-0'>
                        <ItemDetail item={item} />
                        <Brand title='Productos destacados'/>
                        <div className="row justify-content-around m-0 p-0 mt-5">
                            {
                                newItems.map((item) => <Item key={item.id} className='col-md-2 mx-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' item={item}/>)
                            }
                        </div>
                    </div>
                )
            }
            
        </Container>
    )
}

export default ItemDetailContainer

const Container = styled.div`

    padding-top: 100px;

`