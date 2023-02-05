import { configureStore } from "@reduxjs/toolkit"

import { AuthSlice } from "../AuthSlice"
import { ServiceSlice } from "../ServiceSlice"
import { BlogSlice } from "../BlogSlice"

const Store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        serviceSlice: ServiceSlice.reducer,
        blogSlice: BlogSlice.reducer
    }
})

export default Store