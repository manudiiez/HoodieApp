import React,{useState, useEffect} from 'react'
/* ---------------------------------- DATA ---------------------------------- */
import {data} from '../data/Data'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';
/* ------------------------------- COMPONENTES ------------------------------ */
import ItemList from './ItemList';
import Brand from './Brand/Brand';


const ItemListContainer = () => {
    const [listaBuzos, setListaBuzos] = useState([]);

    useEffect(() => {
        data
        .then((res)=> setListaBuzos(res))
        .catch(()=> console.log('hubo un error, intente mas tarde'))
    }, [])

    return (
        <Container>
            <div className="container-lg">
                <Brand title='Catalogo del dia' brand='NEW' />
                <div className="row mt-3">
                    <div className="col-md-3 col-12">
                        {/* <Filter arr={listaBuzos}/> */}
                    </div>
                    <div className="col-md-9 col-12 tienda">
                        <ItemList items={listaBuzos}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemListContainer

const Container = styled.div`
    
    padding-top: 100px;
`