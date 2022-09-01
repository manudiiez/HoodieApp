import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ItemOrders = ({arr, admin}) => {


    useEffect(() => {
        console.log(arr)
    }, [])

    return (
        <div className='row m-0 p-0'>
            {
                arr.lenght === 0 ?(
                    <p>no hay ordenes</p>
                ):(
                    arr.map((item) => (
                        <ItemContainer key={item.id} className='row m-0 p-0 mb-3 px-2 py-3 '>
                            <div className="col-12 row m-0 p-0 justify-content-between align-items-center">
                                <p className='title__order col-md-6 col-12 m-0'>Orden <span>N°{item.id}</span></p>
                                <p className='col-md-6 col-12 text-end'>{item.buyer.email}</p>

                            </div>
                            <div className="col-12">
                                {
                                    item.items.map((obj) => (
                                        <Item key={obj.id} className="row p-0 m-0 py-3">
                                            <div className="col-md-4 col-12">
                                                <p className='m-0 mb-2'>{obj.title}</p>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <p className='m-0 mb-1'><span>Cantidad: </span>{obj.cantidad}</p>

                                            </div>
                                            <div className="col-md-4 col-12">
                                                
                                                <p className='m-0 mb-1'><span>Precio: </span>${obj.price}</p>
                                            </div>
                                        </Item>
                                    ))
                                }
                            </div>
                            {
                                admin ? (
                                    <ButtonContainer className='col-12 row m-0 p-0 justify-content-between align-items-center'>
                                        <button className='col-4'>Estado</button>
                                        <button className='col-4'>Cancelar</button>
                                        <button className='col-4'>Estado</button>
                                    </ButtonContainer>
                                ):(
                                    <span className="d-none"></span>
                                )
                            }
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <p className={`m-0 state ${item.state === 'En espera' && 'state--espera'} ${item.state === 'En camino' && 'state--camino'} ${item.state === 'Realizada' && 'state--realizada'}`}>{item.state}</p>
                                
                                <p className='price m-0'>$ {item.total}</p>
                            </div>
                        </ItemContainer>
                    ))
                )
            }
        </div>
    )
}

export default ItemOrders

const ItemContainer = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
    .title__order{
        font-size: 16px;
        
        span{
            color: #c94343;
        }
    }

    .price{
        color: #006100;
        font-weight: bold;
    }

    .state{
        font-weight: bold;
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

const Item = styled.div`

    border-bottom: 1px solid #e9eaed;
    
    p{
        span{
            color: #c94343;
        }
    }

`

const ButtonContainer = styled.div`
    
    button{
        background-color: transparent;
        border: 1px solid #e9eaed;
        margin: 10px 0;
        padding: 10px 15px;
        cursor: pointer;

        &:hover{
            &:nth-of-type(1){
            }
        }
    }

`