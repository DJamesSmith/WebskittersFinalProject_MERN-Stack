import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    blogData: [],
    singleBlogData: {},
    status: 'success'
})

export const fetchBlog = createAsyncThunk(
    "Blogs/fetch",
    async () => {
        try {
            const res = await axiosInstance.get('allBlogs')
            console.log('API response: ', res.data)
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })


export const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducer: {},
    extraReducers: {
        // All Blogs
        [fetchBlog.pending]: state => {
            state.status = "loading..."
            state.blogData = null
            state.singleBlogData = null
        },
        [fetchBlog.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.blogData = payload
            state.singleBlogData = payload
            // console.log('', payload)
        },
        [fetchBlog.rejected]: state => {
            state.status = "rejected"
        }
    }
})