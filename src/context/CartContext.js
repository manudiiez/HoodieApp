import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartCant, setCartCant] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const isInCart = (item) => {
        console.log('comprobando')
        const existe = cart.some(buzo => buzo.id === item.id)
        return existe

    }
    const cleanCart = () => {
        setCart([])
        setCartCant(0)
    }
    const addToCart = ( item, quantity ) => {
        if(isInCart(item)){
            console.log('ya existe')
            const index = cart.findIndex(buzo => buzo.id === item.id)
            cart[index].cantidad = cart[index].cantidad + quantity
            setCart(cart)
            cantInCart()
        }else{
            console.log('agregado')
            setCart([...cart, { id: item.id ,title: item.title, img: item.img, stock: item.stock, cantidad: quantity, price: item.price}])
        }

        console.log(cart)
    }
    const removeItem = (id) => {
        const resultado = cart.filter((item) => item.id !== id);
        setCart(resultado)
    }

    const cartTotalPrice = () => {
        setTotalPrice(0)
        setTotalPrice(cart.reduce((previous, item) => previous + item.cantidad * item.price, 0))
    }

    const cantInCart = () => {
        setCartCant(0)
        setCartCant(cart.reduce((previous, item) => previous + item.cantidad, 0))
    }

    useEffect(() => {
        cantInCart()
        cartTotalPrice()
    }, [cart])


    return (
        <CartContext.Provider value={{ 
            cart, 
            isInCart, 
            cleanCart, 
            addToCart, 
            removeItem,
            cantInCart: cartCant,
            totalPrice
            }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider