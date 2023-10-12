import axiosInstances from "../utils/axios";

const getAllCategory = async ()=>{
    try {
        const {data} = await axiosInstances.get('products/categories');
        return Promise.resolve({
            isSuccess:true,
            data:data,
        })
        
    } catch (error) {
        return Promise.resolve({
            isSuccess:true,
            data:error,
        })
    }
}
const getSingleCategory = async (params)=>{
    try {
        const {data} = await axiosInstances.get(`products/category/${params}`);
        return Promise.resolve({
            isSuccess:true,
            data:data,
        })
        
    } catch (error) {
        return Promise.resolve({
            isSuccess:true,
            data:error,
        })
    }
}
export {getAllCategory, getSingleCategory}