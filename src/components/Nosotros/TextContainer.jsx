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

&.dark{
    background-color: #787886;
    p{
        color: #BABBC5;
    }
    .text{
        color: #E9EAED;
    }
}

&.light{
    background-color: #fff;
    p{
        color: #C94343;
    }
    .text{
        color: #0E1024;
    }
}
    
`