import {useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import bg from '../img/bgForms2.png'

const User = ({createUser}) => {

    const [formState, setFormState] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleClick = () => {
        setFormState(!formState)
    }

    return (
        <Container className='pt-5'>
            <ContainerForms className={`mt-5 p-5 d-flex justify-content-between align-items-center ${formState ? 'active' : ''}`}>
                <form className='p-4 formSignUp' >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={(e)=> {setPassword(e.target.value)}}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); createUser(email, password)}}>Registrarse</button>
                    <p className='text-decoration-underline mt-3 text-primary' onClick={handleClick}>Si ya tienes una cuenta inicie sesion</p>

                </form>
                <form className='p-4 formSignIn'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar sesion</button>
                    <p className='text-decoration-underline mt-3 text-primary' onClick={handleClick}>Si no tienes una cuenta registrese</p>

                </form>
            </ContainerForms>
        </Container>
    )
}

export default User

const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ContainerForms = styled.div`

    width: 100%;
    max-width: 992px;
    overflow: hidden;
    background: rgb(233,234,237);
background: linear-gradient(90deg, rgba(233,234,237,1) 0%, rgba(255,255,255,1) 50%, rgba(233,234,237,1) 100%);

    p{
        cursor: pointer;
    }

    form{
        width: 100%;
        max-width: 400px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: relative;

        transition: all .5s ease;

        &.formSignUp{
            margin-left: 0;
        }
        &.formSignIn{
            margin-right: -200%;
        }
    }

    &.active{
        .formSignUp{
            margin-left: -200%;
        }
        .formSignIn{
            margin-right: 0;
        }
    }
    
`