import { useEffect } from 'react'
import styled from 'styled-components'

const ItemOrders = ({arr}) => {

    useEffect(() => {
        console.log(arr)
    }, [])

    return (
        <div className='row m-0 p-0'>
            {
                arr.lenght === 0 ?(
                    <p>no hay ordenes</p>
                ):(
                    arr.map((item) => (
                        <ItemContainer key={item.id} className='row m-0 p-0 mb-3 px-2 py-3'>
                            <div className="col-12">
                                <p className='title__order'>Orden <span>N°{item.id}</span></p>
                            </div>
                            <div className="col-12">
                                {
                                    item.items.map((obj) => (
                                        <Item key={obj.id} className="row p-0 m-0 py-3">
                                            <div className="col-md-4 col-12">
                                                <p className='m-0 mb-2'>{obj.title}</p>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <p className='m-0 mb-1'><span>Cantidad: </span>{obj.cantidad}</p>

                                            </div>
                                            <div className="col-md-4 col-12">
                                                <p className='m-0 mb-1'><span>Precio: </span>${obj.price}</p>
                                            </div>
                                        </Item>
                                    ))
                                }
                            </div>
                            <div className="col-12 text-end">
                                $ {item.total}
                            </div>
                        </ItemContainer>
                    ))
                )
            }
        </div>
    )
}

export default ItemOrders

const ItemContainer = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
    .title__order{
        font-size: 18px;
        
        span{
            color: #c94343;
        }
    }

    .text-end{
        color: #006100;
        font-weight: bold;
    }

`

const Item = styled.div`

    border-bottom: 1px solid #e9eaed;
    
    p{
        span{
            color: #c94343;
        }
    }

`