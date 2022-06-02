import axios from 'axios'; 

const LoginAPI = axios.create({
    baseURL: "http://localhost:3000"
}); 

export default LoginAPI; 