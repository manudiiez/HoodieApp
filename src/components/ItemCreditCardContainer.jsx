import React,{useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2'
/* ----------------------------------- IMG ---------------------------------- */
import bgtarjeta from '../img/bg-tarjeta-02.jpg'
/* ------------------------------- FONTaWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemCreditCardContainer = ({buy}) => {

    const [formState, setFormState] = useState(false);
    const [cardView, setCardView] = useState(false);
    const [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12]);
    const [year, setYear] = useState([new Date().getFullYear(), new Date().getFullYear()+1, new Date().getFullYear()+2, new Date().getFullYear()+3, new Date().getFullYear()+4, new Date().getFullYear()+5, new Date().getFullYear()+6, new Date().getFullYear()+7, new Date().getFullYear()+8]);
    const [data, setData] = useState({
        number: '',
        name: '',
        ccv: '',
        expiracionMes: '',
        expiracionAño: ''
    });

    const handleChange = (e) => {
        const esValido = e.target.validity.valid;
        if (esValido) {
            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const handleBuy = (e) => {
        e.preventDefault()
        if(data.number && data.name && data.ccv && data.expiracionMes && data.expiracionAño){
            buy()
        }else{
            Swal.fire(
                '¡Cuidado!',
                'Debe completar todos los datos para poder realizar la compra',
                'warning'
            )
        }
    }

    return (
        <Container>
            <div className={`tarjeta ${cardView && 'active'}`} onClick={() => {setCardView(!cardView)}}>
                <div className="tarjeta__delantera">
                    <div className="row justify-content-end marca__logo" id="marcaLogo">
                    </div>
                    {/* <img src="./img/chip-tarjeta.png" className="row tarjeta__chip" alt=""/> */}
                    <div className="row flex-column justify-content-start align-items-center tarjeta__grupo">
                        <p className="tarjeta__label">Numero Tarjeta</p>
                        <p className="tarjeta__numero tarjeta__text" id="tarjetaNumero">{data.number.length == 0 ? '#### #### #### ####' : data.number}</p>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col tarjeta__grupo">
                            <p className="tarjeta__label">Nombre Tarjeta</p>
                            <p className="tarjeta__nombre tarjeta__text" id="tarjetaNombre">{data.name.length == 0 ? 'NOMBRE' : data.name}</p>
                        </div>
                        <div className="col tarjeta__grupo text-end">
                            <p className="tarjeta__label pe-3">Expiracion</p>
                            <p className="tarjeta__expiracion tarjeta__text" id="tarjeta__expiracion"><span className="mes">{data.expiracionMes.length == 0 ? 'MM' : data.expiracionMes}</span> / <span className="year">{data.expiracionAño.length == 0 ? 'AA' : data.expiracionAño}</span></p>
                        </div>
                    </div>
                </div>

                <div className="tarjeta__trasera">
                    <div className="tarjeta__barra__magnetica"></div>
                    <div className="row tarjeta__datos justify-content-between align-items-center">
                        <div className="col-9">
                            <p className="text-light">Firma</p>
                            <div className="tarjeta__firma d-flex justify-content-start align-items-center px-3">
                                <p id="tarjetaFirma">{data.name.length == 0 ? 'firma' : data.name}</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <p className="text-light">CCV</p>
                            <div className="tarjeta__ccv d-flex justify-content-center align-items-center">
                                <p className="m-0" id="tarjeta__ccv">{data.ccv.length == 0 ? '' : data.ccv}</p>
                            </div>
                        </div>
                        <div className="col-12 tarjeta__texto mt-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga ab saepe? Minima dolorem, amet corrupti, eos cumque culpa expedita</p>
                            <a href="#">www.tuBanco.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn__form__container">
                <button id="btn-abrir-formulario" className={`${formState && 'active'}`} onClick={() => {setFormState(!formState)}}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button >
            </div>
            <form className={`w-100 tarjeta__form ${formState && 'active'}`} id="tarjeta__form" onSubmit={handleBuy}>
                <div className="mt-5 mb-3">
                    <label htmlFor="tarjetaNumeroInput" className="form-label">Numero de tarjeta</label>
                    <input className="form-control" id="tarjetaNumeroInput" maxLength="19" autoComplete="off" name='number' value={data.number} pattern="[0-9]{0,19}" onChange={(e) => {handleChange(e); setCardView(false)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tarjetaNombreInput" className="form-label">Titular de la tarjeta</label>
                    <input type="text" className="form-control" id="tarjetaNombreInput" maxLength="19" autoComplete="off" name='name' value={data.name} pattern="[a-zA\s]{0,19}" onChange={(e) => {handleChange(e); setCardView(false)}}/>
                </div>
                <div className="mb-3 row">
                    <div className="col-9">
                        <label htmlFor="selectMes" className="form-label">Expiracion</label>
                        <div className="row tarjeta__select px-2" id="tarjeta__select">
                            <select name="expiracionMes" id="selectMes" className="form-control col me-2" onChange={(e) => {handleChange(e); setCardView(false)}}>
                                {
                                    month.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>

                            <select name="expiracionAño" id="selectYear" className="form-control col" onChange={(e) => {handleChange(e); setCardView(false)}}>
                                {
                                    year.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>
                    <div className="col-3">
                        <label htmlFor="tarjetaCCVInput" className="form-label">CCV</label>
                        <input type="text" className="form-control" id="tarjetaCCVInput" maxLength="3" name='ccv' pattern="[0-9]{0,3}" value={data.ccv} onChange={(e) => {handleChange(e); setCardView(true)}}/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button  id="ventaButton" className="btn btn-primary">Comprar</button>
                    <p className="text-white m-0">Total: <span className="text-success" id="ventaPrecioTotal"></span></p>
                </div>

            </form>
        </Container>
    )
}

export default ItemCreditCardContainer

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .tarjeta{
        width: 100%;
        max-width: 550px;
        position: relative;
        color: #fff;
        transition: .3s ease all;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        cursor: pointer;
        z-index: 2;

        &.active{
            .tarjeta__delantera{
                transform: rotateY(180deg);
            }

            .tarjeta__trasera{
                transform: rotateY(0deg);

            }
        }
       
        .tarjeta__delantera{

            width: 100%;
            background: url(${bgtarjeta});
            background-size: cover;

            padding:  30px;
            border-radius: 15px;
            min-height: 315px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            box-shadow: 0 10px 10px 0 rgba(90, 116, 148, 0.3);
            transform-style: preserve-3d;
            backface-visibility: hidden;
            transition: .3s ease all;

            .marca__logo{
                text-align: right;
                min-height: 50px ;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    max-width: 80px;   
                }
            }

            .tarjeta__chip{
                width: 100%;
                max-width: 50px;
                margin-bottom: 20px;
            }

            .tarjeta__text{
                color: #fff;
                font-size: 22px;
                text-transform: uppercase;
            }

            .tarjeta__label{
                font-size: 16px;
                color: #7d8994;
                margin-bottom: 5px;
            }
        
        }

        .tarjeta__trasera{
            padding:  30px;
            border-radius: 15px;
            min-height: 315px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            box-shadow: 0 10px 10px 0 rgba(90, 116, 148, 0.3);
            transform-style: preserve-3d;
            backface-visibility: hidden;
            transition: .3s ease all;
            background: url(${bgtarjeta});
            background-size: cover;
            position: absolute;
            top: 0;
            transform: rotateY(180deg);
            /* Este estilo hace que la parte de atras del componente no se vea */
            backface-visibility: hidden;

            .tarjeta__barra__magnetica{
                height: 40px;
                background-color: #000;
                width: 100%;
                position: absolute;
                top: 30px;
                left: 0;
            }

            .tarjeta__datos{
                margin-top: 60px; 
                p{
                    margin-bottom: 5px;
                }

                .tarjeta__firma{
                    height: 40px;
                    background: repeating-linear-gradient(skyblue 0, skyblue 5px, orange 5px, orange 10px);
                    p{
                        line-height: 40px;
                        font-family: 'Dancing Script', cursive;
                        color: #000;
                        font-size: 30px;
                        padding: 0 10px;
                        text-transform: capitalize;
                        font-weight: lighter;
                    }
                }

                .tarjeta__ccv{
                    background-color: #fff;
                    height: 40px;
                    color: #000;
                    padding: 10px;
                    text-align: center;
                }

                .tarjeta__texto{
                    p{
                        font-size: 14px;
                        line-height: 24px;
                    }
                    a{
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }
        }
        

    }

    .btn__form__container{
        text-align: center;
        button{
            width: 50px;
            height: 50px;
            font-size: 20px;
            color: #fff;
            background-color: #2364d2;
            line-height: 20px;
            position: relative;
            top: -25px;
            z-index: 3;
            border: none;
            border-radius: 100%;
            box-shadow: -5px 4px 8px rgba(24, 56, 182, 0.4);
            padding: 5px;
            transition: all .2s ease;
            cursor: pointer;

            &:hover{
                background-color: #1850b1;

            }

            &.active{
                transform: rotate(45deg);
            }
        }
    }

    .tarjeta__form{
        height: 100%;
        max-height: 0;
        width: 100%;
        max-width: 700px;
        padding: 0px 30px 30px 30px;
        border-radius: 10px;
        z-index: 1;
        transition: all .3s ease-out;
        overflow-y: hidden;

        &.active{
            max-height: 500px;
        }

        .tarjeta__select{
            select{
                background-color: $color-grayBlack;
                border: $bg-dark;
                color: $color-gray;
            }
        }
    }

`