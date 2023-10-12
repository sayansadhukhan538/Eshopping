/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = (props)=>{
    const navigate = useNavigate();
    const {children} = props;
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'));
        if(token){
            setIsLogin(true);
        }
    },[]);

    const logOut = ()=>{
        setIsLogin(false)
        toast.success('Logged Out!', {
            duration: 4000,
          });
          navigate('/');  
    }
    const logIn = ()=>{
        setIsLogin(true)
        toast.success('LogIn successful', {
            duration: 4000,
          });
          navigate('/dashboard');  
    }

    return <AuthContext.Provider value={{isLogin, setIsLogin,logOut, logIn}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext;
