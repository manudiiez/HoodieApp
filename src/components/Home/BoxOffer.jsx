import React from 'react'
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from 'styled-components'

const BoxOffer = ({ img, to, children }) => {
  return (
    <Container className='col-lg-6 col-12'>

        {children}

    </Container>
  )
}

export default BoxOffer

const Container = styled.div`
    


`