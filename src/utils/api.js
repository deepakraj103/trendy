import fetchClient from "./fetchClient"

export const BASE_URL = "http://144.126.143.140:5000/vendor";

export function login(email, password) {
    const role="vendor"
    const postData = {
        email,
        password,
        role
    };

    return fetchClient.post(
        `${BASE_URL}/auth/login`,
        postData,
    );
}

export async function getAllScreens() {
    const response = await fetchClient.get(
        BASE_URL + `/display/screen`
    )
    return response.data.data 
}

export function addScreen(data) {
    return fetchClient.post(
        `${BASE_URL}/display/screen`,
        data,
    );
}

