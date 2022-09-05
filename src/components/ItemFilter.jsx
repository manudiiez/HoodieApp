/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { NavLink } from 'react-router-dom';
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Accordion from 'react-bootstrap/Accordion';
/* ------------------------------- FOTNAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const ItemFilter = ({click, handleClick}) => {


    return (
        <Container>
            <ContainerSearch className='d-flex justify-content-center align-items-center flex-row m-4'>
                <button className='btn' onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} className='me-2' />
                    Todos los filtros
                </button>
            </ContainerSearch>
            <ContainerFilter className={click ? 'active' : ''}>
                <FontAwesomeIcon icon={faXmark} onClick={handleClick} className='filter__x'/>
                <Accordion defaultActiveKey={['0']}  className='accordion__container' flush>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Categoria</Accordion.Header>
                        <Accordion.Body>
                            <ContainerCategory>
                                <ul className='list-group'>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/'>
                                            Todos
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/category/nike'>
                                            Nike
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/category/zara'>
                                            Zara
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/category/fila'>
                                            Fila
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                </ul>
                            </ContainerCategory>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Modelo</Accordion.Header>
                        <Accordion.Body>
                            <ContainerCategory>
                                <ul className='list-group'>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/modelo/skinny'>
                                            Skinny
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/modelo/oversize'>
                                            Oversize
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                </ul>
                            </ContainerCategory>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Estilo</Accordion.Header>
                        <Accordion.Body>
                            <ContainerCategory>
                                <ul className='list-group'>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/estilo/deportivo'>
                                            Deportivo
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleClick} className='d-flex justify-content-between align-items-center text-decoration-none' to='/estilo/casual'>
                                            Casual
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </NavLink>
                                    </li>
                                </ul>
                            </ContainerCategory>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>
                            <ContainerColors className='py-5'>
                                <NavLink to='/color/blanco' className="d-flex flex-column justify-content-center align-items-center col-3 container">
                                    <div style={{ backgroundColor: '#fff' }}></div>
                                    <p>Blanco</p>
                                </NavLink>
                                <NavLink to='/color/negro' className="d-flex flex-column justify-content-center align-items-center col-3 container">
                                    <div style={{ backgroundColor: '#000' }}></div>
                                    <p>Negro</p>
                                </NavLink>
                                <NavLink to='/color/verde' className="d-flex flex-column justify-content-center align-items-center col-3 container">
                                    <div style={{ backgroundColor: 'green' }}></div>
                                    <p>Verde</p>
                                </NavLink>
                                <NavLink to='/color/gris' className="d-flex flex-column justify-content-center align-items-center col-3 container">
                                    <div style={{ backgroundColor: 'gray' }}></div>
                                    <p>Gris</p>
                                </NavLink>
                                <NavLink to='/color/marron' className="d-flex flex-column justify-content-center align-items-center col-3 container">
                                    <div style={{ backgroundColor: 'brown' }}></div>
                                    <p>Marron</p>
                                </NavLink>

                            </ContainerColors>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ContainerFilter>
            
        </Container>
    )

}

export default ItemFilter

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
    background-color: #e9eaed;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    button{
        font-size: 18px;
        color: #BABBC5;
        @media (min-width: 768px) {
            display: none;
        }
        
        &:hover{
            color: #C94343;
        }
    }

    @media (min-width: 768px) {
        margin: 0!important;
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
        padding-top: 200px;
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

        .accordion__container{
            padding-top: 0px;
        }
    }
`

const ContainerCategory = styled.div`
    width: 100%;
    ul{
        li{
            a{
                padding: 10px 20px;
                color: #787886;

            }
            &:hover{
                a{
                    background-color: #c9cacb;
                    color: #C94343;
                }
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .container{
        min-width: 70px;
        text-decoration: none;
        &:hover{
            p{
                color: #c94343;
            }
        }
        div{
            height: 25px;
            width: 25px;
            margin-bottom: 5px;
            border-radius: 50%;
            border: 1px solid #babbc5;
        }
        p{
            color: #BABBC5;
        }
    }
`

