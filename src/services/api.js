import axios from "axios";


export const api = axios.create({
    baseURL: 'https://pro-disciplina-api.herokuapp.com/'
});

// api.interceptors.request.use(async config => {
//     const token = getToken();
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });
