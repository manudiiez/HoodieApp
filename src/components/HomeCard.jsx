import React from 'react'
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- <IMG></IMG> ------------------------------ */

const HomeCard = ({ className, children }) => {
  return (
    <Container className={className}>

      {children}

    </Container>
  )
}

export default HomeCard

const Container = styled.div`
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  background-color: #C94343;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  

  &.sweeterWhite{
    background-color: #7f7f7f;
    background-image: url('https://i.postimg.cc/7Yz9r9f9/Sweater.jpg');
    background-position: center;
    background-size: contain;
    background-repeat:  no-repeat;
    justify-content: space-between;
    color: #dd9f16;
  }

  &.gray{
    background-color: #E9EAED
    
  }

`