import React from 'react'
/* ---------------------------- STYLED-COMPOENNTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import brand from '../../img/brandNew.jpg'
/* -------------------------------- COMPONENT ------------------------------- */
import FacebookWidget from '../widget/FacebookWidget'
import InstagramWidget from '../widget/InstagramWidget'
import TwitterWidget from '../widget/TwitterWidget'
import WhatsAppWidget from '../widget/WhatsAppWidget'

const Brand = ({title}) => {
  return (
    <Container className='row px-3 justify-content-between align-items-center'>
        <div className="col-md-4 d-flex justify-content-center align-items-center brand__title p-5">
            <p className='m-0'>{title}</p>
          </div>
          <div className="col-md-4 brand__media p-5">
            <ul className='m-0'>
              <li>
                <FacebookWidget/>
              </li>
              <li>
                <InstagramWidget/>
              </li>
              <li>
                <TwitterWidget/>
              </li>
              <li>
                <WhatsAppWidget/>
              </li>
            </ul>
        </div>
    </Container>
  )
}

export default Brand

const Container = styled.div`
    .brand__title{
    background-image: url(${brand});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    p{
      color: #C94343;
      span{
        font-weight: bold;
      }
    }
  }
  .brand__media{
    ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      li{
        color: #BABBC5;
        &:hover{
            color: #C94343;
        }
      }
    }
  }


`