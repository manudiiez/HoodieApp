import React from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'


const Cart = ({cart, removeItem}) => {
    

    return (
        <div>
            {
                cart.length === 0 ? (
                    <ContainerAlert className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                        No hay items
                        <button className='mt-3'><Link to={'/'}>Ir a la tienda</Link></button>
                    </ContainerAlert>
                ): (
                    // <div>
                    //     <table className="table">
                    //         <thead>
                    //             <tr>
                    //             <th scope="col">Nombre</th>
                    //             <th scope="col">precio/u</th>
                    //             <th scope="col">cantidad</th>
                    //             <th scope="col">Total</th>
                    //             <th scope="col">Methods</th>

                    //             </tr>
                    //         </thead>
                    //         <tbody>
                    //             {
                    //                 cart.map(item => (
                    //                     <tr key={item.id}>
                    //                         <td>{item.title}</td>
                    //                         <td>$ {item.price}</td>
                    //                         <td>{item.cantidad}</td>
                    //                         <td>$ {item.cantidad * item.price}</td>
                    //                         <td>
                    //                             <button className='btn btn-danger' onClick={() => removeItem(item.id)}>
                    //                                 <FontAwesomeIcon icon={faX}/>
                    //                             </button>
                    //                         </td>
                    //                     </tr>
                    //                 )) 
                    //             }
                    //         </tbody>
                    //     </table>
                    // </div>
                    <Container>
                        <div className="row justify-content-center align-items-center">
                            <p className='p-0'>Productos en el carrito: {cart.length}</p>
                        </div>
                        <div className="row justify-content-center align-items-center px-2">
                            <Item className="col-12 p-3 row">
                                <div className="col-12 col-md-4">
                                    <img src={cart[0].img} alt="" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className='title'>{cart[0].title}</p>
                                    <p><span>Precio/u:</span> ${cart[0].price}</p>
                                    <p><span>Unidades:</span> {cart[0].cantidad}</p>
                                    <p className='total'>$ {cart[0].cantidad*cart[0].price}</p>
                                </div>
                            </Item>
                        </div>
                    </Container>
                )
            }
        </div>
    )
}

export default Cart


const Container = styled.div`

`

const Item = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    width: 100%;
    img{
        width:100%;
        height: 220px;
        object-fit: contain;
    }
    .title{
        font-size: 22px;
        text-align: center;

    }

    .total{
        font-size: 20px;
        color:#006100;
        font-weight: bold;
    }
    p{
        text-align: center;
        font-size: 18px;
        span{
            color: #c94343;
            font-weight: bold;
        }
    }

    .text-end{
        color:#006100;
        font-weight: bold;
    }

`

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
