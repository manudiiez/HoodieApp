import React,{useState} from 'react'
/* ---------------------------- STYLED-C0MPONENTS --------------------------- */
import styled from 'styled-components'

const ItemAdminList = ({arr, edit}) => {
    const [productEdit, setProductEdit] = useState(false);

    const handleClickEdit = (e) => {
        e.preventDefault()
        edit(productEdit.id, productEdit)
        setProductEdit(false)
    }


    return (
        <Container >
            {
                arr.lenght != 0 && (
                    arr.map(item => (
                        <div className="card mb-3" key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={item.img} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span>Color: </span>{item.color}</li>
                                    <li className="list-group-item"><span>Estampado: </span>{item.estampado}</li>
                                    <li className="list-group-item"><span>Estilo: </span>{item.estilo}</li>
                                    <li className="list-group-item"><span>Modelo: </span>{item.modelo}</li>
                                    <li className="list-group-item"><span>Tipo: </span>{item.tipo}</li>
                                    <li className="list-group-item"><span>Stock: </span>{item.stock}</li>
                                    <li className="list-group-item"><span>Precio: </span>{item.price}</li>

                                </ul>
                                <div className="card-body">
                                    <button className="btn" onClick={() => {setProductEdit(item)}}>Editar</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            {
                productEdit && (
                    <ModalContainer className='d-flex justify-content-center align-items-center'>
                        <div className='body'>
                            <div className="card mb-3" key={productEdit.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={productEdit.img} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{productEdit.title}</h5>
                                        <p className="card-text">{productEdit.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><span>Color: </span>{productEdit.color}</li>
                                        <li className="list-group-item"><span>Estampado: </span>{productEdit.estampado}</li>
                                        <li className="list-group-item"><span>Estilo: </span>{productEdit.estilo}</li>
                                        <li className="list-group-item"><span>Modelo: </span>{productEdit.modelo}</li>
                                        <li className="list-group-item"><span>Tipo: </span>{productEdit.tipo}</li>
                                        <li className="list-group-item"><span>Stock: </span>{productEdit.stock}</li>
                                        <li className="list-group-item"><span>Precio: </span>{productEdit.price}</li>

                                    </ul>
                                    <div className="card-body">
                                        <form onSubmit={handleClickEdit}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Stock</label>
                                                <input type="number" className="form-control" id="exampleFormControlInput1" value={productEdit.stock} onChange={(e) => {setProductEdit({...productEdit, ['stock']: e.target.value})}}/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                                                <input type="number" className="form-control" id="exampleFormControlInput2" value={productEdit.price} onChange={(e) => {setProductEdit({...productEdit, ['price']: e.target.value})}}/>
                                            </div>
                                            <div className="mb-3">
                                                <button type='submit' className='btn'>Editar</button>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg' onClick={() => {setProductEdit(false)}}></div>
                    </ModalContainer>
                )
            }
        </Container>
    )
}

export default ItemAdminList

const Container = styled.div`

    .card{
        ul{
            li{
                span{
                    font-weight: 500;
                    color: #c94343;
                }

            }
        }

        img{
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        button{
            background-color: #f4f5f8;
            border: 1px solid #e9eaed;
            &:hover{
                color: #fff;
                background-color: #c94343;
            }
        }
    }


`

const ModalContainer = styled.div`

  position: fixed;
  width: 100%;
  z-index: 400;
  height: 100%;
  top: 0;
  left: 0;

  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 400;
  }

  .body{
    z-index: 401;
    width: 95%;

    .card{
        max-height: 80vh;
        overflow-y: scroll;
        img{
            width: 100%;
            height: 100%;
            max-height: 350px;
            object-fit: cover;
        }
        ul{
            li{
                &:hover{
                    background-color: #e9eaed;
                }
            }
        }
    }
  }

`