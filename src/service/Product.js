import axiosInstances from "../utils/axios";

const getAllProducts = async()=>{
    try {
        const {data} = await axiosInstances.get('products');
        return Promise.resolve({
            isSuccess:true,
            data:data,
            message: "Successfully getting all products",
        })
        
    } catch (error) {
        return Promise.resolve({
            isSuccess:false,
            data:null
        })
    }
}
const getSingleProduct = async(param)=>{
    try {
        const {data} = await axiosInstances.get(`products/${param}`);
        return Promise.resolve({
            isSuccess:true,
            data:data,
            message: "Successfully getting all products",
        })
        
    } catch (error) {
        return Promise.resolve({
            isSuccess:false,
            data:null
        })
    }
}

export{getAllProducts, getSingleProduct}