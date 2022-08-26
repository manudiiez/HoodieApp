import React from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
                    <Container className='row justify-content-center align-items-center'>
                        {
                            cart.map(item => (
                                <Item className='col-12 row p-0 m-0 py-3' key={item.id}>
                                    <div className='col-4'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='col-6 d-flex flex-column justify-content-around align-items-start'>
                                        <p className='m-0 title'>{item.title}</p>
                                        <p className='m-0'><span>Precio/u:</span> ${item.price}</p>
                                        <p className='m-0'><span>Cantidad:</span> {item.cantidad}</p>
                                    </div>
                                    <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                                        <button className='btn' onClick={() => removeItem(item.id)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <p className='text-end m-0 price'>${item.cantidad*item.price}</p>
                                    </div>
                                </Item>
                            ))
                        }
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
    border-bottom: 1px solid #e9eaed;
    img{
        width: 100%;
        height: 130px;
        border-radius: 50%;
        object-fit: contain;
    }

    .price{
        color: #006100;
        font-weight: bold;        
        font-size: 20px;

    }

    .title{
        font-size: 20px;
        color: #c94343;
    }

    p{
        font-size: 16px;
    }

    button{
        background: #c94343;
        color: #fff;
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
