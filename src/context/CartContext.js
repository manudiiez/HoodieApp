import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartCant, setCartCant] = useState(0);

    const isInCart = (item) => {
        console.log('comprobando')
        const existe = cart.some(buzo => buzo.id === item.id)
        return existe

    }
    const cleanCart = () => {
        setCart([])
    }
    const addToCart = ( item, quantity ) => {
        if(isInCart(item)){
            console.log('ya existe')
            const index = cart.findIndex(buzo => buzo.id === item.id)
            cart[index].cantidad = cart[index].cantidad + quantity
            setCart(cart)
        }else{
            console.log('agregado')
            setCart([...cart, { id: item.id ,name: item.name, img: item.img, stock: item.stock, cantidad: quantity, price: item.price}])
        }

        console.log(cart)
    }
    const removeItem = (id) => {
        const resultado = cart.filter((item) => item.id !== id);
        setCart(resultado)
    }

    const cantInCart = () => {
        cart.map(item => {
            setCartCant(cartCant + item.cantidad)
        })
    }

    useEffect(() => {
        cantInCart()
    }, [cart])


    return (
        <CartContext.Provider value={{ 
            cart, 
            isInCart, 
            cleanCart, 
            addToCart, 
            removeItem,
            cantInCart: cartCant
            }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider