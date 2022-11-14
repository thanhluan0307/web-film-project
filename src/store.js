import {configureStore} from '@reduxjs/toolkit'
import couterReducer from '~/reducer/couterSlice'
import counterProduct from '~/reducer/totalProductSlice'
import amountProduct from '~/reducer/amountSlice'

export const store = configureStore({
    reducer: {
       couterReducer,
       counterProduct,
       amountProduct,
    }
})