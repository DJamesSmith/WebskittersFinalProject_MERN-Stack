import { configureStore } from "@reduxjs/toolkit"

import { AuthSlice } from "../AuthSlice"
import { ServiceSlice } from "../ServiceSlice"

const Store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        serviceSlice: ServiceSlice.reducer
    }
})

export default Store