import { configureStore } from "@reduxjs/toolkit"

import { AuthSlice } from "../AuthSlice"
import { ServiceSlice } from "../ServiceSlice"
import { BlogSlice } from "../BlogSlice"
import { DoctorSlice } from "../DoctorSlice"
import { DepartmentSlice } from "../DepartmentSlice"

const Store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        serviceSlice: ServiceSlice.reducer,
        blogSlice: BlogSlice.reducer,
        doctorSlice: DoctorSlice.reducer,
        departmentSlice: DepartmentSlice.reducer
    }
})

export default Store