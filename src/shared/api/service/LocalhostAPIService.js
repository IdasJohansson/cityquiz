import http from "../LocalhostAPI";

// Hämtar ett userobject från databasen, jämför med inputfälten i login. Svarar med true om det finns en användare med samma användarnamn och lösen. 
export const getLoginCheck = async (user) => {
    const response = await fetch("https://localhost:5001/api/User/CheckLogin",{
    method:"POST",    
    headers:{"content-type":"application/json"}, body:JSON.stringify({UserName:user.inputusername,Password:user.inputpassword})
    })
    return response.json()
}; 

/*
// Hämtar ett questionobject
export const getQuestion = async (question) => {
    const response = await fetch("https://localhost:5001/api/Question/1",{ // ---> byt ut 1 mot {id}
    method:"GET",    
    headers:{"content-type":"application/json"}, body:JSON.stringify({Id:question.id, Country:question.countryname, City:question.cityname, Longitude:question.long, Latittude:question.lati})
    })
    return response.json()
}; 
*/

const getQuestion = async () => {
    return await http.get("/Question/1")
}
export {getQuestion}


// Ska kolla om man har svarat rätt i db, returnerar true eller false. 
const getAnswerCheck = async () => {
    return await http.get("/Question/CheckAnswer")
}; 
export {getAnswerCheck}; 


