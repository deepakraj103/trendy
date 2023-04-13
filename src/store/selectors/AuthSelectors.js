export const isAuthenticated = (state) => {
    console.log("state", state)
    if (state.auth?.auth?.token?.token) return true;
    return false;
};
