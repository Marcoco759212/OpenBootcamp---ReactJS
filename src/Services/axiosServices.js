import APIRequest from "../Utils/config/axios.config";

export const getRandomUser = () => {
    return APIRequest.get('/', {
        validateStatus: (status) => {
            return status < 500;
        }
    })
    // APIRequest.post('/login')
}