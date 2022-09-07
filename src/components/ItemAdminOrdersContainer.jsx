import { useEffect, useState } from 'react'
/* -------------------------------- FIREBASE -------------------------------- */
import {getDocs, collection, getFirestore, doc, updateDoc} from 'firebase/firestore'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemOrders from './ItemOrders'

const ItemAdminOrdersContainer = () => {

    const [listaOrdenes, setListaOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderStateId, setOrderStateId] = useState(false);

    const db = getFirestore()

    const getOrders = () => {
        setLoading(true)
        const ordersCollection = collection(db, 'orders')
        getDocs(ordersCollection)
            .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
            setListaOrdenes(data)
            setLoading(false)
            })
            .catch((error) => console.log(error)) 
    }


    useEffect(() => {
        getOrders()
    }, [])

    const changeState = async(id) => {
        setOrderStateId(id)
    }

    const sendChangeState = async(value) => {
        setOrderStateId(false)
        const orderRef = doc(db, "orders", orderStateId);
        await updateDoc(orderRef, {
            state: value
        });
        console.log('estado actualizado')
        getOrders()
    }

    const deleteOrder = (id) => {
        Swal.fire({
            title: 'Eliminar la order N°' + id,
            text: "¿Estas seguro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                const orderRef = doc(db, "orders", id);
                updateDoc(orderRef, {state: 'De baja'}).then(() => {
                    Swal.fire(
                        'Eliminado',
                        'La orden se elimino con exito',
                        'success'
                    )
                    getOrders()

                })


            }
          })
    }

    return (
        <Container>
        <div className="container-lg p-3">
            {
                orderStateId ? (
                    <ModalContainer>
                        <div className="bg" onClick={() => {setOrderStateId(false)}}></div>
                        <div className='container'>
                            <p className='m-0'>Seleccionar estado del pedido n°: <span>{orderStateId}</span></p>
                            <div className="row m-0 p-0 mt-3">
                                <button className='col-4 state state--espera' onClick={() => {sendChangeState('En espera')}}>En espera</button>
                                <button className='col-4 state state--camino' onClick={() => {sendChangeState('En camino')}}>En camino</button>
                                <button className='col-4 state state--realizada' onClick={() => {sendChangeState('Realizada')}}>Realizada</button>
                            </div>
                        </div>

                    </ModalContainer>
                ):(
                    <span className='d-none'></span>
                )
            }
            <p className='title'>Todos mis <span>pedidos</span></p>
            {
            loading ? (
                <div className="d-flex justify-content-center my-5 py-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            ):(
                <ItemOrders arr={listaOrdenes} admin={true} state={changeState} deleteOrder={deleteOrder} />
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

const ModalContainer = styled.div`
    position: fixed;
    z-index: 300;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    .container{
        position: relative;
        z-index: 301;
        background-color: #fff;
        padding: 20px;
        p{
            font-size: 18px;
            span{
                font-weight: bold;
                color: #c94343;
            }
        }
    }
    .state{
        font-weight: bold;
        background-color: transparent;
        border: 1px solid #e9eaed;
        transition: all .3s ease-in;
        &:hover{
            background-color: #e9eaed;
        }
    }

    .state--espera{
        color: #c94343;
    }
    
    .state--camino{
        color: #bebe00;
    }

    .state--realizada{
        color: #00b200;
    }


`

