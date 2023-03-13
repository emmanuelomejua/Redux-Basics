import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'jane',
        email: 'jane@gmail.com'
    },
    reducers: {
        update: (state, action) => {
            
        }
    }
})

export default userSlice