import axios from "axios";

export const login = (email, password) => {

    let body = {
        email,
        password
    }

    return axios.post('https://reqres.in/api/login', body)
}


export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

export const getAllPageUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const createUser = (name, job) => {

    let body = {
        name,
        job
    }

    return axios.post(`https://reqres.in/api/users`, body)
}

export const updateUser = (id, name, job) => {

    let body = {
        name,
        job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
