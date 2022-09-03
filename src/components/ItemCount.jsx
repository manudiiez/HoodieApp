import { useState, useEffect } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemCount = ({ onAdd, stock, initial }) => {

    const [count, setCount] = useState(initial);


    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        setCount( count - 1)
    }

    useEffect(() => {
        setCount(initial)
    }, [stock])

    return (
        <Container>
            {
                stock != 0 ? (
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                        <button disabled={count <= 1} onClick={handleSubtract}>-</button>
                        <p className='m-0 px-5'>{count}</p>
                        <button disabled={count >= stock} onClick={handleAdd}>+</button>
                        </div>
                        <button disabled={stock <= 0} className='addCarrito' onClick={() => onAdd(count)}>Añadir al carrito</button>
                    </div>
                ):(
                    <p className='stock'>no hay stock</p>
                )
            }

        </Container>
    )
}

export default ItemCount

const Container = styled.div`
    .stock{
        color: #c94343;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
    }
    

    div{
        width: 100%;
        max-width: 200px;
        height: 40px;
        background-color: transparent;
        border: 1px solid #e9eaed;
        border-radius: 30px;

        button{
            background-color: transparent;
            height: 100%;
            padding: 0 20px;
            border: none;
            &:nth-of-type(1){
                border-right: 1px solid #babbc5;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
            }
            &:nth-of-type(2){
                border-left: 1px solid #babbc5;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
            }

            &:hover{
                background-color: #c94343;
                color: #fff;
            }

            &:disabled{
                background-color: #e9eaed;
                color: #9c9c9c;
            }
        }
        
    }

    .addCarrito{
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

`