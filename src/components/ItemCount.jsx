import { useState } from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemCount = ({ initial, onAdd, onRest}) => {
    return (
        <Container className='d-flex justify-content-between align-items-center'>
            <button onClick={onRest}>-</button>
            <p className='m-0'>{initial}</p>
            <button onClick={onAdd}>+</button>
        </Container>
    )
}

export default ItemCount

const Container = styled.div`
    
    width: 100%;
    max-width: 200px;
    height: 40px;
    background-color: #e9eaed;
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
    }

`