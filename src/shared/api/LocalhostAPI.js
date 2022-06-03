import axios from 'axios'; 

const LoginAPI = axios.create({
    baseURL: "http://localhost:44357/api"
}); 

export default LoginAPI; 