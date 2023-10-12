import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Login from './Page/Login'
import Topbar from './components/Topbar'
import { AuthProvider } from './context/Auth.Context'
import Dashboard from './Page/Dashboard'
import Signup from './Page/Signup'
import Cart from './Page/Cart'
import Jewelery from './Page/Jewelery'
import ProductDetails from './Page/ProductDetails'



function App() {
  

  return (
    <>
    <AuthProvider>
     
    <Topbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Routes>
      <Route path='/jewelery' element={<Jewelery/>}/>
    </Routes>
    {/* {console.log(cart)} */}
    
    </AuthProvider>
    </>
  )
}

export default App
