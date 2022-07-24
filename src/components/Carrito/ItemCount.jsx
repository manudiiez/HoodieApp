import React,{useState} from 'react'
import styled from 'styled-components'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const Suma = () => {
        if(count !== stock){
            setCount(count+1)
        }
    }
    const Resta = () => {
        if(count !== 1){
            setCount(count-1)
        }
    }

    return (
        <Container>
            <button onClick={Resta}>-</button>
            <p className='m-0 mx-3'>{count}</p>
            <button onClick={Suma}>+</button>
        </Container>
    )
}

export default ItemCount

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e7;

    button{
        padding: 0 10px;
        border: none;
        background-color: #e8e8ee;
        color: #C94343;

        &:hover{
            background-color: #C94343;
            color: #e8e8ee;
        }
    }

`