
import axios from "axios";

// Local
export const baseURL = 'http://127.0.0.1:8001/';
const apiBaseURL = 'http://127.0.0.1:8001/api/';

// Remote
// export const baseURL = 'http://example.com/';
// export const apiBaseURL = 'http://example.com/';


export const api = axios.create({
    baseURL: apiBaseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    }
})