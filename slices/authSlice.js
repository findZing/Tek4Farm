import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login: false,
    language: 'vi'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {

        },
        setLanguage: (state, action) => {
            state.language = action.payload.language
        }
    }
})

export const {
    setLogin,
    setLanguage
} = authSlice.actions

export default authSlice.reducer