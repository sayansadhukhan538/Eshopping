/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
export const CartProvider=({children})=>{
    const [cart, setCart] = useState([]);
    // const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event, itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) { 
        return { ...item, quantity: event.target.value };
      }
      return item;
    });
    setCart(updatedCart);
    // setQuantity(event.target.value);
  };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartData'));
        if (storedCart) {
          setCart(storedCart);
        }
      }, []);

      function addToCart(product, quantity){
        
        setCart((prevCart)=>{
            const temp =[...prevCart];
            const productToAdd = { ...product, quantity };
            temp.push(productToAdd);
            localStorage.setItem('cartData', JSON.stringify(temp));
            return temp;
        })
    }

    // useEffect(() => {
    //     localStorage.setItem('cartData', JSON.stringify(cart));
    //   }, [cart]);
    function removeFromCart(productId) {
        setCart((prevCart) => {
          const updatedCart = prevCart.filter((product) => product.id !== productId);
          localStorage.setItem('cartData', JSON.stringify(updatedCart));
          return updatedCart;
        });
      }
      
      

    console.log(cart)

    return (
        <CartContext.Provider value={{addToCart,removeFromCart, cart, setCart, handleQuantityChange,}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;


