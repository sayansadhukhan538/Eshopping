/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const WishContext = createContext();
export const WishlistProvider=({children})=>{

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishList = JSON.parse(localStorage.getItem('wishListData'));
        if (storedWishList) {
          setWishList(storedWishList);
        }
      }, []);

      function addToWishList(product){
        setWishList((prevWishList)=>{
            const temp =[...prevWishList];
            temp.push(product);
            localStorage.setItem('wishListData', JSON.stringify(temp));
            return temp;
        })
    }

    function removeFromWishList(productId) {
        setWishList((prevWishList) => {
          const updatedWishList = prevWishList.filter((product) => product.id !== productId);
          localStorage.setItem('wishListData', JSON.stringify(updatedWishList));
          return updatedWishList;
        });
      }

    return (
        <WishContext.Provider value={{addToWishList,removeFromWishList, wishList}}>
            {children}
        </WishContext.Provider>
    )
}
export default WishContext;


