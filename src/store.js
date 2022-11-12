import {configureStore} from '@reduxjs/toolkit'
import couterReducer from '~/reducer/couterSlice'

export const store = configureStore({
    reducer: {
       couterReducer
    }
})