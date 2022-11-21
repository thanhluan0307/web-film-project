import {configureStore} from '@reduxjs/toolkit'
import counterProduct from '~/reducer/totalProductSlice'
import amountProduct from '~/reducer/amountSlice'
import favourite from '~/reducer/favourite'
export const store = configureStore({
    reducer: {
       counterProduct,
       amountProduct,
       favourite,
    }
})