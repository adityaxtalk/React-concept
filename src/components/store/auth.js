import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // isAuthentication: Boolean(localStorage.getItem("isAuthentication")) || false
    isAuthentication: true
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login(state) {
            localStorage.setItem("isAuthentication", true);
           state.isAuthentication = true
        },
        logout(state) {
            localStorage.removeItem("isAuthentication");
            state.isAuthentication = false;
        }
    }
})


export const {login, logout} = authenticationSlice.actions;

export default authenticationSlice.reducer;