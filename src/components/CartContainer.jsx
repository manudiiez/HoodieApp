import React,{useContext, useState} from 'react'
/* -------------------------------- FIREBASE -------------------------------- */
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore'
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext } from '../context/CartContext'
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Cart from './Cart'
/* --------------------------------- CONTEXT -------------------------------- */
import { useAuth } from '../context/AuthContext'
import ItemCreditCardContainer from './ItemCreditCardContainer'

const CartContainer = () => {

    const {cart, removeItem, cleanCart, totalPrice} = useContext(CartContext)
    const {user} = useAuth()
    const db = getFirestore()


    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [modalConfirmState, setModalConfirmState] = useState(false);
    const [modalCreditCart, setModalCreditCart] = useState(false);

    const navigate = useNavigate()

    const handleBuy = (e) => {
        const userEmail = user.email

        e.preventDefault()
        if(email == emailConfirmation && email == userEmail){
            setModalConfirmState(false)
            setModalCreditCart(true)
        }else{
            Swal.fire(
                'Error',
                'El email ingresado no coincide con el usuario o con la validacion',
                'error'
            )
        }

    }

    const editProduct = async(item) => {
        const orderRef = doc(db, "itemCollection", item.id);
        await updateDoc(orderRef, {
            stock: item.stock - item.cantidad
        });
        console.log('estado actualizado')
    }

    const buyOrder = async() => {
        const userData = {
            email: user.email,
            uid: user. uid
        }
        const newOrder = {
            buyer: userData,
            items: cart,
            date: new Date(),
            total: totalPrice,
            state: 'En espera'
        }

        cart.map((item) => {
            editProduct(item)
        })

        const ordersCollection = collection(db, 'orders');
        setLoader(true)
        addDoc(ordersCollection, newOrder)
        .then(({id}) => {
            Swal.fire({
                title: 'Orden realizada',
                text: 'Su pedido ya fue enviado con exito\n id:' + id,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            .then(() => {
                navigate('/')
            })
            setLoader(false)
        })
        .then(() => cleanCart())
        .catch((error) => console.log(error) )
    }

    return (
        <div className='container-lg'>
            <Cart cart={cart} removeItem={removeItem} />
            {
               cart.length === 0 || loader ? 
               (
                <div className={`d-flex justify-content-center my-5 py-5 ${cart.length === 0 ? 'd-none': ''}`}>
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
               ):
               (
                   <ContainerPrice className="row align-items-center justify-content-between m-0 p-0 mt-3">
                       <div className='col-12 col-sm-9 text-start'>
                           <button className='btn btn-success me-3' onClick={() => {setModalConfirmState(true)}}>Finalizar compra</button>
                           <button className='btn btn-danger' onClick={cleanCart}>Limpiar carrito</button>
                       </div>
                       <div className="totalPrice col-12 col-sm-3">
                           <p className='mb-3 text-end'>Total: <span>${totalPrice}</span></p>
                       </div>
                   </ContainerPrice>
               ) 
            }
            {
                modalConfirmState && (
                    <ModalContainer className='d-flex justify-content-center align-items-center'>
                        <div className="bg" onClick={() => {setModalConfirmState(false)}}></div>
                        <div className="body p-3">
                            <p className='text-center title'>Estas seguro de comprar tu carrito por un total de <span>${totalPrice}</span></p>
                            <p className='text-center'>Para confirmar ingrese el email del usuario dos veces</p>
                            <form onSubmit={handleBuy}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email del usuario</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Confirmar email</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setEmailConfirmation(e.target.value)}}/>
                                </div>
                                <div className="mb-3">
                                    <button>Confirmar compra</button>
                                </div>
                            </form>
                        </div>
                    </ModalContainer>
                )
            }
            {
                modalCreditCart && (
                    <ModalContainerCart className='d-flex justify-content-center align-items-center'>
                        <div className="bg" onClick={() => {setModalCreditCart(!modalCreditCart)}}></div>
                        <div className="body pt-3">
                            <ItemCreditCardContainer buy={buyOrder}/>
                        </div>
                    </ModalContainerCart>
                )
            }
        </div>
    )
}

export default CartContainer

const ContainerPrice = styled.div`
    
    p{
        font-size: 22px;
        color: #000;
        span{
            font-weight: bold;
            color: #006100;
        }
    }

    button{
        @media (max-width: 417px) {
            margin-bottom: 5px;
        }
    }
`

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 300;
    .bg{
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .body{
        width: 90%;
        background-color: #fff;
        z-index: 301;
        border-radius: 10px;

        .title{
            span{
                font-weight: bold;
                color: #006100;
            }
        }

        button{
            background-color: transparent;
            border: 1px solid #e9eaed;
            padding: 10px 20px;

            &:hover{
                background-color: #c94343;
                color: #fff;
            }
        }
    }
`

const ModalContainerCart = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 300;
    .bg{
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .body{
        width: 98%;
        z-index: 301;
        background-color: #fff;
        border-radius: 5px;
        display: flex; 
        justify-content: center;
        align-items: center;
    }


`