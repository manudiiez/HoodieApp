import React,{useEffect, useState} from 'react'
/* ---------------------------- STYLED-COMPONERNT --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Brand from '../Utils/Brand'
import Filter from './Filter'
import ItemList from './ItemList'
import { data } from '../../data/Data'

const Tienda = () => {

    const [listaBuzos, setListaBuzos] = useState([]);

    useEffect(()=>{

        data
        .then((res)=> setListaBuzos(res))
        .catch(()=> console.log('hubo un error, intente mas tarde'))

    }, [])

    return (
        <Container>
            <div className="container-lg">
                <Brand title='Catalogo del dia' />
                <div className="row mt-3">
                    <div className="col-md-3 col-12">
                        <Filter/>
                    </div>
                    <div className="col-md-9 col-12 tienda">
                        <ItemList arr={listaBuzos}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Tienda

const Container = styled.div`
    
    padding-top: 100px;

    .tienda{
    }

`