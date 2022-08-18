import React,{useContext} from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext } from '../context/CartContext'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'


const Cart = () => {

    const {cart, removeItem, cleanCart, totalPrice} = useContext(CartContext)


    return (
        <div className='container-lg'>
            {
                cart.length === 0 ? (
                    <ContainerAlert className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                        No hay items
                        <button className='mt-3'><Link to={'/'}>Ir a la tienda</Link></button>
                    </ContainerAlert>
                ): (
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">precio/u</th>
                                <th scope="col">cantidad</th>
                                <th scope="col">Total</th>
                                <th scope="col">Methods</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.title}</td>
                                            <td>$ {item.price}</td>
                                            <td>{item.cantidad}</td>
                                            <td>$ {item.cantidad * item.price}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>
                                                    <FontAwesomeIcon icon={faX}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )) 
                                }
                            </tbody>
                        </table>
                        <ContainerPrice className="d-flex align-items-center justify-content-between m-0 p-0">
                            <button className='btn btn-danger' onClick={cleanCart}>Limpiar carrito</button>
                            <div className="totalPrice">
                                <p>Total: <span>${totalPrice}</span></p>
                            </div>
                        </ContainerPrice>
                    </div>
                )
            }
        </div>
    )
}

export default Cart


const ContainerAlert = styled.div`
    
    width: 100%;
    height: 200px;
    background-color: #c94343c0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 22px;
    color: #fff;
    button{
        background-color: transparent;
        border: none;
        border: 1px solid #fff;
        border-radius: 15px;
        padding: 5px 15px;
        a{
            text-decoration: none;
            color: #fff;
        }

        &:hover{
            background-color: #fff;
            a{
                color: #c94343;
            }
        }
    }

`

const ContainerPrice = styled.div`
    
    p{
        font-size: 22px;
        color: #000;
        span{
            font-weight: bold;
            color: #006100;
        }
    }
`