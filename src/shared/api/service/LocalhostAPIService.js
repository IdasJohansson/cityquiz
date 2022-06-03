import http from "../LocalhostAPI";

export const getLoginCheck = (user) => {
    const response = fetch("https://localhost:5001/api/User/CheckLogin",{
    method:"POST",    
    headers:{"content-type":"application/json"}, body:JSON.stringify({UserName:user.inputusername,Password:user.inputpassword})
    })
    return response.json()
}; 

