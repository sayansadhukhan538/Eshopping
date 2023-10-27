import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Topbar from "./components/Topbar";
import { AuthProvider } from "./context/Auth.Context";
import Signup from "./Page/Signup";
import Cart from "./Page/Cart";

import ProductDetails from "./Page/ProductDetails";
import { CartProvider } from "./context/Cart.Context";
import { WishlistProvider } from "./context/Wishlist.Context";
import WishList from "./Page/WishList";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
          <Topbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
            <Route path="wishlist" element={<WishList/>}/>
          </Routes>
          
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
