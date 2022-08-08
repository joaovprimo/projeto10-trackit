import axios from "axios";

const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function createHeaders (){
    const auth = localStorage.getItem("token");

    const config = {
        headers:{
            Authorization: `Bearer ${auth}`
        }
    }
    return config;
}

function postLogin(form){
const promise = axios.post(`${Base_URL}auth/login`, form);
return promise;
}

function postRegister(form){
    const promise = axios.post(`${Base_URL}auth/sign-up`, form);
    return promise;
    }

function getHabtToday(){
    const config = createHeaders();
 const promise = axios.get(`${Base_URL}habits/today`, config);
return promise;
}

function getHabtList(){
    const config = createHeaders();
    const promise = axios.get(`${Base_URL}habits`, config);
    return promise
}

function postHabit(content){
    const config = createHeaders();
    const promise = axios.post(`${Base_URL}habits`, content , config);
    return promise
}

function deletHabit(id){
    const config = createHeaders();
    const promise = axios.delete(`${Base_URL}habits/${id}`, config);
    return promise
}

function postChackHabit(hbt){
    const config = createHeaders();
    const promise = axios.post(`${Base_URL}habits/${hbt.id}/check`,{hbt},config);
    return promise
}

function postUncheckHabit(hbt){
    const config = createHeaders();
    const promise = axios.post(`${Base_URL}habits/${hbt.id}/uncheck`,{hbt},config);
    return promise
}


export { postLogin, postRegister, getHabtToday, getHabtList, postHabit, deletHabit, postChackHabit, postUncheckHabit }
