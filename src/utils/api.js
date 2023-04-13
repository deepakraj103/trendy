import fetchClient from "./fetchClient"

export const BASE_URL = "http://144.126.143.140:5000";

export function login(email, password) {
    const role="vendor"
    const postData = {
        email,
        password,
        role
    };

    return fetchClient.post(
        `${BASE_URL}/vendor/auth/login`,
        postData,
    );
}
