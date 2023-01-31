import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getData = ()=>{
    return axios.get(BASE_URL);
}

export const postData = (data)=>{
    return axios.post(BASE_URL,data);
}

export const updataData = (id,data)=>{
    return axios.put(`${BASE_URL}/${id}`,data);
}

export const deleteData = (id)=>{
    return axios.delete(`${BASE_URL}/${id}`)
}