import axios from 'axios'; 

const LoginAPI = axios.create({
    baseURL: "http://localhost:3000/api"
}); 

export default LoginAPI; 