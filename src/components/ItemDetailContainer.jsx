import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { data, getItem } from '../data/Data'
import ItemDetail from './ItemDetail'

const sizes = ['xl', 'l', 'm']

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [initial, setInitial] = useState(1);

    const onAdd = () => {
        if(initial < item.stock){
            setInitial(initial + 1)
        }
    }

    const onRest = () => {
        if(initial > 1){
            setInitial(initial - 1)
        }
    }

    useEffect(()=>{

        getItem(1)
        .then((res)=> setItem(res))
        .catch(()=> console.log('hubo un error, intente mas tarde'))

    }, [])

    return (
        <Container className='container-lg p-5'>
            {
                item === null ? 
                (
                    <div className="d-flex justify-content-center my-5 py-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ):
                (
                    <ItemDetail item={item} onAdd={onAdd} onRest={onRest} initial={initial} />
                )
            }
        </Container>
    )
}

export default ItemDetailContainer

const Container = styled.div`

    padding-top: 100px;

`

const ContainerText = styled.div`
    text-align: center;

    h5{
        
        font-size: 20px;
        color: #c94343;
    }
    
    .descripcion{
        font-size: 16px;
        line-height: 2rem;
    }

    .precio{
        color: #007300;
        font-size: 16px;
        font-weight: bold;
    }

    .addCarrito{
        background-color: #c94343;
        border: none;
        color: #fff;
        padding: 5px 10px;
        margin-top: 20px;
        border-radius: 30px;
        transition: all .5s ease;
        max-width: 300px;
        &:hover{
            transform: scale(1.05);
        }
    }

    @media(min-width: 992px){

        h5{
            margin: 30px;
            font-size: 24px;
        }

        .descripcion{
            font-size: 20px;
            margin-bottom: 20px;
        }

        .precio{
            font-size: 20px;
        }

        .methods__container{
            width: 400px;
        }

    }

`