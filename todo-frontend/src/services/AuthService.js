import axios from "axios";

const AUTH_REST_API_URL = 'http://localhost:8080/api/auth';

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_URL + '/register', registerObj);

export const loginAPICall = (usernameOrEmail, password) =>
    axios.post(AUTH_REST_API_URL + '/login', { usernameOrEmail, password});


export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem('token');

export const saveLoggedInUser = (username, role) =>{
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");

    return username != null;
}

export const getLoggedInUser = () => {
    return sessionStorage.getItem("authenticatedUser");
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload(false);
}

export const isAdminUser = () => {
    let role = sessionStorage.getItem("role");

    return role != null && role == 'ROLE_ADMIN';
}
