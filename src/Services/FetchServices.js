import { Password } from "@mui/icons-material";
import { async } from "rxjs";

export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log(response);
    return response.json();
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log(response);
    return response.json();
}

export const getUsersDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log(response);
    return response.json();
}

export const login = async (email, Password) => {
    let body = {
        email: email,
        password: Password
    }
    console.log(body);
    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type' : 'application/json'
        // },
        body: JSON.stringify(body)
    });

    return response.json();
}