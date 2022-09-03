import React,{useState, useEffect} from 'react'
/* -------------------------------- FIREBASE -------------------------------- */  
import { getFirestore, getDocs, collection, updateDoc, doc, getDoc} from "firebase/firestore";
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemAdminList from './ItemAdminList';

const ItemAdminListContainer = () => {

  const [listaBuzos, setListaBuzos] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore()
    
  const getBuzos = () => {
    setLoading(true)
    const itemsCollection = collection(db, 'itemCollection')
    getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
        console.log(data)
        setListaBuzos(data)
        console.log(listaBuzos)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

  const editProduct = async(id, item) => {
    console.log('edit')
    const orderRef = doc(db, "itemCollection", id);
    await updateDoc(orderRef, item);
    console.log('estado actualizado')
    getBuzos()
  }

  useEffect(()=>{
    getBuzos()
    console.log(listaBuzos)
  }, [])

  return (
    <div className='container-lg pt-5'>
      <h6 className='text-center h2'>Productos de la tienda</h6>
      {
        loading ? (
          <div className="d-flex justify-content-center my-5 py-5">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ):(
          <ItemAdminList arr={listaBuzos} edit={editProduct} />
        )
      }
    </div>
  )
}

export default ItemAdminListContainer

