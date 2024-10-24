import axios from "axios";

const apiservice = axios.create({
    baseURL: "https://api.example.com",
    headers: {
        Authorization: ''
    }
})

export default apiservice