

import React, { useEffect } from 'react'
/* ---------------------------- STYLED-COMPONENT ---------------------------- */
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Item = ({ item, className }) => {

    const {id, title, price, img, stock, marca,  color} = item


    const navigate = useNavigate();


    const goTo = () => {
        navigate('/item/'+id)
    }

    return (
        <Container className={className} onClick={goTo}>

            <div className='card__img'>
                <img src={img}  alt="" />
            </div>
            <div className='card__body py-3 px-2'>
                <h6 className='text-center fw-lighter'>{title}</h6>
                <p className='text-center'>$ {price}</p>
            </div>

        </Container>
    )
}

export default Item

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.05)
    }

    @media (min-width: 768px) {
        max-height: 400px;
    }
    .card__img{

        height: 300px;

        @media (max-width: 450px) {
            height: 250px;
        }

        img{
            width: 100%;
            border-radius: 5px;
            height: 100%;
            object-fit: cover;
        }
    }

    .card__body{
        h6{
            color: #787886;
            font-size: 16px;
        }

        p{
            color: #02b402;
        }
    }

`