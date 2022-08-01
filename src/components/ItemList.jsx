import React from 'react'
/* ------------------------------- COMPONENTES ------------------------------ */
import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div className='row justify-content-center px-3'>
        {
            
            items.length === 0 ? 
            (
                <div className="d-flex justify-content-center my-5 py-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ):
            (
                items.map((buzo)=> <Item key={buzo.id} className='col-md-3 mx-2 col-5 p-0 mb-5 d-flex justify-content-between flex-column' item={buzo}/>)
            )
              
        }
    </div>
  )
}

export default ItemList