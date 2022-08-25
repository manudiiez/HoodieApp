import { useEffect, useState } from 'react';
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2';
/* --------------------------------- CONTEXT -------------------------------- */
import { useAuth } from '../context/AuthContext';
/* -------------------------------- BOOTSTRAP ------------------------------- */
import { Alert } from 'react-bootstrap';
/* ------------------------------- COMPONENTS ------------------------------- */
import InstagramWidget from './widget/InstagramWidget';
import TwitterWidGet from './widget/TwitterWidget';
import FacebookWidget from './widget/FacebookWidget'


const ItemUserContainer = () => {

    const [formState, setFormState] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState();

    const {signin, signup} = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmitSignin = async(e) => {
        e.preventDefault()
        setError(null)
        try {
          await signin(user.email, user.password)
          Swal.fire({
            title: 'Sesion iniciada',
            text: 'Ahora puede acceder a todas nuestras funciones',
            icon: 'success'
          }).then(() => {
            navigate('/')
          })
        } catch (error) {
          error.code === 'auth/wrong-password' && setError('La contraseña es incorrecta')
          error.code === 'auth/user-not-found' && setError('El email no pertenece a ningun usuario registrado')
        }
    }

    const handleSubmitSignup = async(e) => {
        e.preventDefault()
        setError(null)
        if(confirmPassword === user.password){
            try {
                await signup(user.email, user.password)
                Swal.fire({
                    title: 'Usuario creado',
                    text: 'Ahora puede acceder a todas nuestras funciones',
                    icon: 'success'
                }).then(() => {
                    navigate('/')
                })
            } catch (error) {
                error.code === 'auth/email-already-in-use' && setError('El email ya esta registrado, pruebe iniciar sesion')
                error.code === 'auth/weak-password' && setError('La contraseña es muy insegura, pruebe otra')
            }
        }else{
            setError('Las contraseñas no coinciden')
        }
    }

    return (
        <Container className='pt-5 d-flex flex-column'>
            {
                error && <Alert variant={'danger'} className='w-100 mt-5 alert'>
                    {error}
                </Alert>
            }
            <div className={`container ${formState ? 'active' : ''}`}>
                <div className="sign__up">
                    <form onSubmit={handleSubmitSignup}>
                        <h6>Crear una cuenta</h6>
                        <div className="social__container">
                            <a href="#"><InstagramWidget/></a>
                            <a href="#"><TwitterWidGet/></a>
                            <a href="#"><FacebookWidget/></a>
                        </div>
                        <p>Use su email para registrarse</p>
                        <input type="email" required placeholder='Email' name='email' onChange={handleChange}/>
                        <input type="text" required placeholder='Password' name='password' onChange={handleChange}/>
                        <input type="text" required placeholder='Confirm password' onChange={(e)=> setConfirmPassword(e.target.value)}/>
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="sign__in">
                    <form onSubmit={handleSubmitSignin}>
                        <h6>Iniciar sesion</h6>
                        <div className="social__container">
                            <a href="#"><InstagramWidget/></a>
                            <a href="#"><TwitterWidGet/></a>
                            <a href="#"><FacebookWidget/></a>
                        </div>
                        <p>Utilice el email de su cuenta</p>
                        <input type="email" required placeholder='Email' name='email' onChange={handleChange}/>
                        <input type="password" required placeholder='Password' name='password' onChange={handleChange}/>
                        <button type='submit'>sign in</button>
                        <p className='text-danger'>{error}</p>
                    </form>
                </div>
                <div className="overlay__container">
                    <div className="overlay">
                        <div className="overlay__left">
                            <h6>Wellcome Back!!</h6>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={() => setFormState(!formState)}>Sign In</button>
                        </div>
                        <div className="overlay__right">
                            <h6>Hello, Friend!!</h6>
                            <p>Enter your personal details ans start journey with us</p>
                            <button onClick={() => setFormState(!formState)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemUserContainer

const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    .alert{
        max-width: 768px;
        background-color: #c94343;
        color: #fff;
    }

    .container{
        position: relative;
        width: 100%;
        max-width: 768px;
        min-height: 500px;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.25);

        @media(max-width: 992px){
            height: 850px;
        }

        .sign__up, .sign__in{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            transition: all .6s ease-in-out;
        }

        .sign__up{
            width: 50%;
            opacity: 0;
            z-index: 1;
            @media(max-width: 992px){
                width: 100%;
                height: 50%;
                bottom: 0;
            }
        }

        .sign__in{
            width: 50%;
            z-index: 2;
            @media(max-width: 992px){
                width: 100%;
                height: 50%;
            }
        }

        form{
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            text-align: center;

            h6{
                font-weight: bold;
                margin: 0;
            }

            p{
                font-size: 14px;
                font-weight: 100;
                line-height: 20px;
                letter-spacing: 0.5px;
                margin: 15px 0 20px;
                @media(max-width: 992px){
                    margin: 10px 0 15px;
                }
            }

            input{
                background-color: #eee;
                padding: 12px 15px;
                margin: 8px 5px;
                width: 100%;
                border-radius: 5px;
                border: none;
                outline: none;
                @media(max-width: 992px){
                    margin: 5px 2px;
                }
            }

            button{
                color: #fff;
                background-color: #c94343;
                font-size: 12px;
                font-weight: bold;
                padding: 12px 55px;
                margin: 20px;
                border-radius: 20px;
                border: 1px solid #c94343;
                outline: none;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: transform 80ms ease-in;
                cursor: pointer;

                @media(max-width: 992px){
                    margin: 10px;
                }

                &:active{
                    transform: scale(0.90);
                }
            }

        }

        &.active{
            .sign__up{
                transform: translateX(100%);
                opacity: 1;
                z-index: 5;
            }
            .sign__in{
                transform: translateX(100%);   
            }

            .overlay__container{
                transform: translateX(-100%);
                .overlay{
                    transform: translateX(50%);

                    .overlay__left{
                        transform: translateX(0);
                    }
                    .overlay__right{
                        transform: translateX(20%);
                    }
                }
            }

            @media(max-width: 992px){
                .sign__up{
                    transform: translateY(100%);
                }
                .sign__in{
                    transform: translateY(100%);   
                }

                .overlay__container{
                    transform: translateY(-100%);
                    
                }
            }
        }

        .overlay__container{
            position: absolute;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform .6s ease-in-out;
            z-index: 10;

            @media(max-width: 992px){
                width: 100%;
                height: 50%;
                bottom: 0;
                left: 0;
            }

            .overlay{
                position: relative;
                color: #fff;
                background-color: #ff416c;
                left: -100%;
                height: 100%;
                width: 200%;
                background: linear-gradient(to right, #787886, #c94343);
                transform: translateX(0);
                transition: transform .6s ease-in-out;
                

                .overlay__left, .overlay__right{
                    position: absolute;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding: 0 40px;
                    text-align: center;
                    top: 0;
                    height: 100%;
                    width: 50%;
                    transform: translateX(0);
                    transition: transform 0.6s ease-in-out;
                }

                .overlay__left{
                    transform: translateX(-20%);
                }
                .overlay__right{
                    right: 0;
                    transform: translateX(0);
                }

                h6{
                    font-weight: bold;
                    margin: 0;
                }

                p{
                    font-size: 14px;
                    font-weight: 100;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    margin: 15px 0 20px;
                    @media(max-width: 992px){
                        margin: 10px 0 15px;
                    }
                }

                button{
                    background-color: transparent;
                    border: 2px solid #fff;
                    color: #fff;
                    border-radius: 20px;
                    padding: 12px 55px;

                    &:hover{
                        background-color: #fff;
                        color: #c94343;
                    }
                }
            }
        }

        .social__container{
            margin: 20px 0;
            @media(max-width: 992px){
                margin: 15px 0;
            }
            a{
                height: 40px;
                width: 40px;
                margin: 0 5px;
                
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #ccc;
                border-radius: 50%;
                color: #c94343;

                @media(max-width: 992px){
                    margin: 0 3px;
                }

                &:hover{
                    background-color: #c94343;
                    color: #fff;
                }
            }
        } 

    }

`