import React from 'react'
import styled from 'styled-components'

const TextContainer = ({ className, children }) => {
  return (
    <Container className={className}>
        {children}
    </Container>
  )
}

export default TextContainer

const Container = styled.div`

border-radius: 20px;

&.light{
    position: relative; 
    z-index: 3;
    background-color: #BABBC5;
    p{
        color: #C94343;
    }
    .text{
        color: #0E1024;
    }
}

&.dark{

    background-color: #585562;
    transform: scale(.9);
    position: relative;
    left: 0;
    top: -35px;
    z-index: 2;
    p{
        color: #BABBC5;
    }
    .text{
        color: #E9EAED;
    }

    @media (min-width: 992px){
        left: -35px;
        top: 0;
    }
}
    
`