import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com/todos";



// Below for function are used to communicate with api
// In this project axios is used to communicate with api
export const getData = ()=>{
    return axios.get(BASE_URL);
}

export const postData = (data)=>{
    return axios.post(BASE_URL,data);
}

export const updateData = (id,data)=>{
    return axios.put(`${BASE_URL}/${id}`,data);
}

export const deleteData = (id)=>{
    return axios.delete(`${BASE_URL}/${id}`)
}