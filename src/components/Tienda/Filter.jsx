import React,{useEffect, useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Accordion from 'react-bootstrap/Accordion';
/* ------------------------------- FOTNAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


/* ------------------------------- COMPONENTES ------------------------------ */
import ItemAccordion from './ItemAccordion.jsx';
import ItemColor from './ItemColor';


const Filter = ({arr}) => {
    const [click, setClick] = useState(false);
    // const unicos = [... new Set(god)]

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <Container>
            <ContainerSearch className='d-flex justify-content-center align-items-center flex-row'>
                <Select isClearable options={[...new Set(arr.map( (item) => ({value:item.color, label:item.color}) ))]} className='col-10' /> 
                <button className='btn'>
                    <FontAwesomeIcon icon={faBars} onClick={handleClick} />
                </button>
            </ContainerSearch>
            <ContainerFilter className={click ? 'active' : ''}>
                <FontAwesomeIcon icon={faXmark} onClick={handleClick} className='filter__x'/>
                <Accordion defaultActiveKey={['0']} alwaysOpen  className='accordion__container' flush>
                    <ItemAccordion id='0' title='Categoria'>
                        <ContainerCategory>
                            <ul className='list-group'>
                                <li className='d-flex justify-content-between align-items-center'>
                                    Nike
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </li>
                                <li className='d-flex justify-content-between align-items-center'>
                                    Adidas
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </li>
                                <li className='d-flex justify-content-between align-items-center'>
                                    Zara
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </li>
                            </ul>
                        </ContainerCategory>
                    </ItemAccordion>
                    <ItemAccordion id='1' title='Precio'>
                        <ContainerPrice>
                            <p className='col-12'>Filtrar por precio</p>
                            <input type="number" className='col-6' />
                            <input type="number" className='col-6' />
                        </ContainerPrice>
                    </ItemAccordion>
                    <ItemAccordion id='2' title='Color'>
                        <ContainerColors className='py-5'>
                            <ItemColor color='red' title='Rojo'/>    
                            <ItemColor color='black' title='Negro'/>    
                            <ItemColor color='green' title='Verde'/>    
                            <ItemColor color='orange' title='Naranja'/>    
                            <ItemColor color='white' title='Blanco'/>    
                            <ItemColor color='brown' title='Marron'/>    


                        </ContainerColors>
                    </ItemAccordion>
                </Accordion>
            </ContainerFilter>
            
        </Container>
    )
}

export default Filter

const Container = styled.div`
    
    z-index: 1;

    @media (min-width: 768px) {
        padding: 20px 0;
        position: sticky;
        top: 100px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

`

const ContainerSearch = styled.div`
    
    button{
        font-size: 25px;
        color: #BABBC5;
        @media (min-width: 768px) {
            display: none;
        }
        
        &:hover{
            color: #C94343;
        }
    }


`

const ContainerFilter = styled.div`
    padding: 10px;
    background-color: #E9EAED;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    transition: all .5s ease;
    &.active{
        left: 0;
    }

    .filter__x{
        position: absolute;
        top: 100px;
        right: 20px;
        font-size: 30px;
        color: #C94343;
        @media (min-width: 768px) {
            display:none;
        }
    }

    .accordion__container{
        width: 100%;

        .accordion-item{
            background-color: transparent;
            .accordion-header{
                .accordion-button{
                    background-color: transparent;
                    color: #787886;
                    
                }
            }

        }

        .accordion-body{
            padding: 0;
        }
    }

    @media (min-width: 768px) {
        left: 0;
        padding: 10px;
        background-color: #fff;
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .5s ease;
        overflow-y: auto;
    }

`

const ContainerCategory = styled.div`
    width: 100%;
    ul{
        li{
            padding: 10px 20px;
            color: #787886;
            &:hover{
                background-color: #c9cacb;
                color: #C94343;

            }
        }
    }
`

const ContainerPrice = styled.div`

    p{
        color: #C94343;
        text-align: center;
        padding-top: 10px;
    }

    input{
        background-color: #d8d9db;
        border: 1px solid #b0b1b2;
    }

`

const ContainerColors = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`



