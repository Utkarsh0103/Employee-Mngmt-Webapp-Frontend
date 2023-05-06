import axios from "axios";  
import { isLoggedIn } from "./auth";

const AuthHeader = isLoggedIn()?JSON.parse(localStorage.getItem("data")).token:"NO_TOKEN"

export const myAxios = axios.create({
    baseURL: 'http://localhost:8085',
    headers: {
        'Authorization': AuthHeader,
        'Content-Type': 'application/json'
    }
})

export const loginUser = async (detail) => {
    return axios.post('http://localhost:8085/auth/login', detail).then((response) => response.data)
}