import React,{useState, useEffect} from 'react'
import CarritoItem from './CarritoItem'
import { data } from '../../data/Data'

const CarritoListItem = () => {

  const [listaBuzos, setListaBuzos] = useState([]);

    useEffect(()=>{

        data
        .then((res)=> setListaBuzos(res))
        .catch(()=> console.log('hubo un error, intente mas tarde'))

    }, [])

  return (
    <ul className="list-group">
      {
        listaBuzos.length === 0 ?
        (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ):(
          listaBuzos.map((buzo)=> <CarritoItem key={buzo.id} producto={buzo}/>  )
        )
      }
    </ul>
  )
}

export default CarritoListItem
