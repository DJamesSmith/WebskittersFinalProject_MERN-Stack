import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'
// import { toast } from "react-toastify"

const initialState = {
    loading: false,
    user: {},
    userToken: null,
    error: null,
    success: false,
    message: null,
    redirectToIndex: null,
    isLoggedInToken: false,
    redirectToLogin: null,
    isLoggedInName: false
}

export const registerUser = createAsyncThunk(
    "register",
    async user => {
        try {
            const ress = await axiosInstance.post("register", user)
            return ress?.data
        } catch (error) {
            console.log(error)
        }
    })

export const loginUser = createAsyncThunk(
    "login",
    async user => {
        try {
            const res = await axiosInstance.post("login", user)
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
            console.log(state.user, "jnvsfnvjnsf")
        },
        reset_redirectTo: (state, { payload }) => {
            state.redirectToIndex = payload
        },
        handleLogoutToken: (state, { payload }) => {
            localStorage.removeItem("token")
            state.isLoggedInToken = false
        },
        handleLogoutName: (state, { payload }) => {
            localStorage.removeItem("name")
            localStorage.removeItem("image")
            state.isLoggedInName = false
        },
        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token")
            if (token !== null && token !== undefined) {
                state.isLoggedInToken = true
            }
        }
    },

    extraReducers: {
        [registerUser.pending]: state => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.isLoggedInName = true
            localStorage.setItem("name", payload?.data?.name)
            localStorage.setItem("image", payload?.data?.image)
            state.redirectToLogin = "/login"
            state.userInfo = payload
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },

        // Login
        [loginUser.pending]: (state, action) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            localStorage.setItem("token", payload?.token)
            localStorage.setItem("name", payload?.user?.name)
            localStorage.setItem("image", payload?.user?.image)
            state.redirectToIndex = "/"
            state.isLoggedInToken = true
            state.loading = false
            // state.userInfo = payload
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const { setUser, setLogout, reset_redirectTo, handleLogoutName, handleLogoutToken, check_token } = AuthSlice.actions