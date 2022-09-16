import APIRequest from "../Utils/config/axios.config";

export const getRandomJokes = () => {
    return APIRequest.get('/jokes/random', {
        validateStatus: (status) => {
            return status < 500;
        }
    })
    // APIRequest.post('/login')
}