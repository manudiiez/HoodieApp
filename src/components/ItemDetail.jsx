import React,{useContext, useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {useNavigate} from 'react-router-dom'
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext } from '../context/CartContext'
/* ------------------------------- COMPONENTS ------------------------------- */
import ItemCount from './ItemCount'




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

                <ContainerSizes className='row justify-content-center align-items-center m-0 p-0 w-100'>
                    {
                        item.talles.map((talle) => (
                            <div className="col-lg-3 col-6" key={talle}>
                                <input type="radio" name="size" id={talle}/>
                                <label htmlFor={talle}>{talle.toUpperCase()}</label>
                            </div>
                        ))
                    }
                   
                </ContainerSizes>
                <p className='precio my-3 p-0'>$ {item.price}</p>
                {
                    buyState ? (
                        <ItemCount stock={item.stock} onAdd={handleAdd} initial={1} />   

                    ):(
                        <button className='buyButton' onClick={handleBuy}>Finalizar compra</button>             
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

const ContainerMethods= styled.div`
    


`

const ContainerSizes = styled.div`


    input[type="radio"]{
        display: none;
    }

    label{

        color: #c94343;
        background-color: #E9EAED;
        width: 100%;
        padding: 5px 0;
        margin: 5px 0;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            background-color: #801d1d;
            color: #E9EAED;
        }

    }
    
    input[type="radio"]:checked + label{
        background-color: #c94343;
        color: #E9EAED;
    }


`