import React,{useState, useEffect} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import logo from '../../img/logoHoodieApp.png'
import logo2 from '../../img/logo2.png'
/* ------------------------------- COMPONENTES ------------------------------ */
import CartWidget from './CartWidget'
import UserWidget from './UserWidget'
import BurgerBtn from './BurguerBtn'
import Link from './Link'

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const handleClick = () => {
    setNavState(!navState);
  }

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth
      if(width > 992){
        setNavState(false)
    }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => {
        window.removeEventListener("resize", updateWidth)
    }
  }, [])

  return (
    <Container>
      <BgDiv2 onClick={handleClick} className={navState ? 'active' : ''}></BgDiv2>
      <BgDiv className={navState ? 'active' : ''}></BgDiv>
      <header className='d-flex justify-content-between align-items-center px-4'>
        <ContainerBurgerBtn>
          <BurgerBtn clicked={navState} handleClick={handleClick}/>
        </ContainerBurgerBtn>
        <ContainerLogo className='d-flex justify-content-center align-items-center'>
          <img src={navState ? logo2 : logo } alt="" />
          <p className='m-0'><strong>Hoodie<span>Shop</span></strong></p>
        </ContainerLogo>
        <Nav className={navState ? 'active' : ''}>
          <ul className='p-0 m-0'>
            <Link to="/">Inicio</Link>

            <Link to="/tienda">Hombres | Mujeres</Link>

            <Link to="/child">Niños | Niñas</Link>
          </ul>
        </Nav>

        <ContainerMethods className={navState ? 'active' : ''}>
          <button>
            <UserWidget/>
            <p>Cuenta</p>
          </button>
          <button>
            <CartWidget/>
            <p>Carrito</p>
          </button>
        </ContainerMethods>
        <div className='div__none'></div>
      </header>
    </Container>

  )
}

export default NavBar


const Container = styled.div`  
  
  min-height: 80px;

  header{
    position: fixed;
    width: 100%;
    height: 80px;
    .div__none{
      @media(min-width: 992px){
        display: none;
      }

    }
  }


`

const ContainerLogo = styled.div`
  img{
    width: 50px;
  }
  
  p{
    color: #0E1024;
    font-weight: normal;

    span{
      color: #C94343;
    }
  }

  @media(min-width: 992px){
    justify-content: center;
  }
`

const Nav = styled.nav`

  position: absolute;
  left: 0;
  top: 0;
  height: 60vh;
  width:80vw;
  z-index: 10;
  display: flex; 
  justify-content: center;
  align-items: flex-end;
  transition: .5s left ease;
  left: -100vw;
  &.active{
    left: 0;
  }

  ul{
    width: 100%;
    list-style: none;
    li{
      width: 100%;
      text-align: center;

      &:hover{
        a{
          background-color: #E9EAED;

          color: #C94343;
        }
      }

      a{
        padding: 10px 0;
        width: 100%;
        display: block;
        text-decoration: none;
        color: #0E1024;
        &.active{
          background-color: #c9cacb;

          color: #C94343;
        }
      }
    }
  }

  @media(min-width: 992px){
    position: relative;
    left: 0;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 450px;

    ul{
      display: flex; 
      justify-content: center;
      align-items: center;
      li{
        &:hover{
          a{
            text-decoration: underline;
            background-color: transparent;
          }
        }
        a{
          &.active{
            text-decoration: underline;
            background-color: transparent;
        }
        }
      }
    }
  }
    
`

const ContainerMethods = styled.div`
  padding-bottom: 30px;
  position: absolute;
  top: 0;
  height: 100vh;
  width:80vw;
  z-index: 9;
  display: flex; 
  justify-content: space-around;
  align-items: flex-end;
  transition: .5s left ease;
  left: -100vw;
  &.active{
    left: 0;
  }

  button{
    text-align: center;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #0E1024;
    background-color: transparent;
    border: none;
    font-size: 15px;
    &:hover{
      color: #C94343;
    }
    p{
      margin: 0;
    }
  }

  @media(min-width: 992px){
    position: relative;
    left: 0;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 143px;
    justify-content: end;
    padding-bottom: 0;


    button{
      flex-direction: row;
      margin: 0 10px;
      p{
        margin-left: 10px;
      }
    }
  }
  
`

const ContainerBurgerBtn = styled.div`
  position: relative;
  z-index: 12;
  @media(min-width: 992px){
    display: none;
  }

`

const BgDiv = styled.div `
  left: -100vw;
  transition: .5s left ease;
  position: fixed;
  background-color: #E9EAED;
  height: 100vh;
  width:80vw;

  &.active{
    left: 0;
  }
  @media(min-width: 992px){
    display: none;
  }
`

const BgDiv2 = styled.div`
  
  left: -100vw;
  position: fixed;
  background-color: rgba(14, 16, 36, 0.5);
  height: 100vh;
  width:100vw;
  &.active{
    left: 0;
  }
  @media(min-width: 992px){
    display: none;
  }

`