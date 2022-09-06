import React,{useContext, useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {useNavigate, Link} from 'react-router-dom'
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext } from '../context/CartContext'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemCount from './ItemCount'
import { useEffect } from 'react'




const ItemDetail = ({ item }) => {

    const {addToCart} = useContext(CartContext)

    const [count, setCount] = useState(0);
    const [buyState, setBuyState] = useState(true);
    const navigate = useNavigate();

    const handleAdd = async(quantityToAdd) => {
        console.log('Handle add', quantityToAdd)
        setCount(quantityToAdd)
        console.log(count)
        addToCart(item, quantityToAdd)
        setBuyState(false)
    }

    const handleBuy = () => {
        navigate('/cart')
    }

    useEffect(() => {
        setBuyState(true)
    }, [item])

    return (
        <div className="row mb-5 justify-content-around">
            <ContainerImg className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                <img src={item.img} alt="" />
            </ContainerImg>
            <ContainerText className="col-md-6 col-12 py-5 d-flex justify-content-center align-items-center flex-column">
                <h5>{item.title}</h5>
                <p className='descripcion'>{item.description}</p>
                <ContainerCaracteristicas className='row  p-0 m-0'>
                    <p className='col-6'><span>Marca:</span> {item.marca}</p>
                    <p className='col-6'><span>Modelo:</span> {item.modelo}</p>
                    <p className='col-6'><span>Estilo:</span> {item.estilo}</p>
                    <p className='col-6'><span>Color:</span> {item.color}</p>
                    <p className='col-6'><span>Tipo:</span> {item.tipo}</p>
                    <p className='col-6'><span>Estampado:</span> {item.estampado}</p>
                </ContainerCaracteristicas>
                <p className='precio my-3 p-0'>$ {item.price}</p>
                {
                    buyState ? (
                        <ItemCount stock={item.stock} onAdd={handleAdd} initial={1} />   

                    ):(
                        <ContainerButtons>
                            <button className='buyButton' onClick={handleBuy}>Finalizar compra</button>   
                            <button className='buyButton'><Link to='/'>Seguir comprando</Link></button> 
                        </ContainerButtons>
                                  
                    )
                }
            </ContainerText>
        </div>
    )
}

export default ItemDetail

const ContainerImg = styled.div`
    img{
        width: 100%; 
        max-width: 450px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`

const ContainerText = styled.div`
    text-align: center;

    h5{
        
        font-size: 20px;
        color: #c94343;
    }
    
    .descripcion{
        font-size: 16px;
        line-height: 2rem;
    }
    .precio{
        color: #007300;
        font-size: 16px;
        font-weight: bold;
    }
    @media(min-width: 992px){
        h5{
            margin: 30px;
            font-size: 24px;
        }
        .descripcion{
            font-size: 20px;
            margin-bottom: 20px;
        }
        .precio{
            font-size: 20px;
        }
    }
`

const ContainerCaracteristicas = styled.div`
    
    p{
        font-size: 16px;
        span{
            color: #c94343;
            font-weight: bold;
        }
    }

`


const ContainerButtons = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .buyButton{
        background-color: #c94343;
        border: none;
        color: #fff;
        padding: 5px 10px;
        margin-top: 20px;
        border-radius: 30px;
        transition: all .5s ease;
        max-width: 300px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            transform: scale(1.05);
        }

        a{
            text-decoration: none;
            color: #fff;
        }
    }


`