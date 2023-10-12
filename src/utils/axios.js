import axios from 'axios';

const axiosInstances = axios.create({
    baseURL:'https://fakestoreapi.com/'
});
export default axiosInstances;