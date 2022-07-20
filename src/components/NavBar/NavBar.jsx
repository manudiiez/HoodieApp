import React,{useState, useEffect} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import logo from '../../img/logo.jpg'
/* ------------------------------- COMPONENTES ------------------------------ */
import BurguerBtn from './BurguerBtn'
import NavBarLink from './NavBarLink'
import CartWidget from './CartWidget'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth
      if(width > 768){
        setClicked(false)
    }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => {
        window.removeEventListener("resize", updateWidth)
    }
  },[])

  const handleClick = () => {
    const width = document.body.clientWidth
    if(width < 768){
      setClicked(!clicked);
    }
  }

  return (
    <Container className='container-lg p-3'>
      <BurguerBtn clicked={clicked} handleClick={handleClick}/>
      <div className="logo__container">
        <img src={logo} alt="" />
        <p className='m-0'><strong>Shoes<span>App</span></strong></p>
      </div>
      <Nav className={clicked ? 'active' : ''}>
        <NavBarLink to='/' click={handleClick}>Zapatillas</NavBarLink>
        <NavBarLink to='/Contacto' click={handleClick}>Contacto</NavBarLink>
        <NavBarLink to='/Nosotros' click={handleClick}>Nosotros</NavBarLink>

      </Nav>
      <CartWidget/>
      {
        clicked ? (
          <BgTouch onClick={handleClick}></BgTouch>
        ):(
          <span className='d-none'></span>
        )
      }
    </Container>
  )
}

export default NavBar

const Container = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo__container{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 50px;
    }
    P{
      color: #0e1024;
      span{
        color: #C94343;
      }
    }
  }

`

const Nav = styled.nav`
  width: 80vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  left: -2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #BABBC5;
  transition: .6s all ease;

  a{
    color: #f6f4f3;
    text-decoration: none;
    width: 100%;
    text-align: center;
    padding: 10px 0;

    &:hover{
      background-color: #585562;
      color: #C94343;
    }
  }

  @media (min-width: 768px) {
    position: relative;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 300px;
    flex-direction: row;
    background: transparent;

    a{
      color: #0E1024;
      &:hover{
        background: transparent;
        color: #C94343;
        text-decoration: underline;
      }
    }
  }

  &.active{
    left: 0;
  }
`

const BgTouch = styled.div`
  
  width: 100vw;
  height: 100vh;
  background-color: rgba(14, 16, 36, 0.6);
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 9;

`