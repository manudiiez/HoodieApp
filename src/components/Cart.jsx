import React,{useContext} from 'react'
/* --------------------------------- CONTEXT -------------------------------- */
import { CartContext } from '../context/CartContext'


const Cart = () => {

    const {cart, removeItem, cleanCart} = useContext(CartContext)


    return (
        <div className='container-lg'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">precio/u</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Img</th>
                    <th scope="col">Methods</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.cantidad * item.price}</td>
                                <td>{item.img}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeItem(item.id)}>x</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
            <button className='btn btn-danger' onClick={cleanCart}>Limpiar carrito</button>
        </div>
    )
}

export default Cart
