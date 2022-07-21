import React,{useState, useEffect} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import logo from '../../img/logo.jpg'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { NavLink } from 'react-router-dom'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'

const NavBar = () => {

  return (
    <Container>
      <header className='d-flex justify-content-center align-items-center'>
        <ContainerLogo>
          <p><strong>Hoodie<span>Shop</span></strong></p>
        </ContainerLogo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/">Hombres | Mujeres</NavLink>
            </li>
            <li>
              <NavLink to="/">Niños | Niñas</NavLink>
            </li>
          </ul>
        </Nav>

        <ContainerMethods>
          <div>
            <FontawesomeObject icon={}/>
          </div>
        </ContainerMethods>

      </header>
    </Container>

  )
}

export default NavBar


const Container = styled.div`  
  
  background-color: BLUE;
  min-height: 80px;

  header{
    position: fixed;
    width: 100%;
    height: 80px;
  }


`

const ContainerLogo = styled.div`
  
  p{
    color: #0E1024;
    font-weight: normal;

    span{
      color: #C94343;
    }
  }
`

const Nav = styled.nav`
  
  
`

const ContainerMethods = styled.div`
  
  
`