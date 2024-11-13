import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import weatherReducer from './slice/weatherSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        weather: weatherReducer,
    },
})