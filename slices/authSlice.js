import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login: false,
    translate: 'vi'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {

        }
    }
})

export const {
    setLogin
} = authSlice.actions

export default authSlice.reducer