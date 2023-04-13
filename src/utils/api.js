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

export async function getAllScreens() {
    const response = await fetchClient.get(
        BASE_URL + `/vendor/display/screen`
    )
    return response.data.data 
}

export async function getAllMedia() {
    const response = await fetchClient.get(
        BASE_URL + `/vendor/display/media`
    )
    return response.data.data.media 
}

export function addScreen(data) {
    return fetchClient.post(
        `${BASE_URL}/vendor/display/screen`,
        data,
    );
}

export async function addScreenCode(deviceToken) {
    const postData = {
        deviceToken :deviceToken 
    };
    const response = await fetchClient.post(
        `${BASE_URL}/device/auth`,
        postData,
    );
    return response.data.data
}
