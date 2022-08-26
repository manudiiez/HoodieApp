import React,{useContext, useState} from 'react'
/* -------------------------------- FIREBASE -------------------------------- */
import { addDoc, collection, getFirestore } from 'firebase/firestore'
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

const USER_DEMO = {
    name: 'manudiiez',
    phone: 121212,
    email: 'manu@manu.com'
}

const CartContainer = () => {

    const {cart, removeItem, cleanCart, totalPrice} = useContext(CartContext)
    const {user} = useAuth()
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()

    const handleBuy = () => {

        const userData = {
            email: user.email,
            uid: user. uid
        }

        const newOrder = {
            buyer: userData,
            items: cart,
            date: new Date(),
            total: totalPrice
        }

        const db = getFirestore()

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
                           <button className='btn btn-success me-3' onClick={handleBuy}>Finalizar compra</button>
                           <button className='btn btn-danger' onClick={cleanCart}>Limpiar carrito</button>
                       </div>
                       <div className="totalPrice col-12 col-sm-3">
                           <p className='mb-3 text-end'>Total: <span>${totalPrice}</span></p>
                       </div>
                   </ContainerPrice>
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