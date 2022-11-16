import {configureStore} from '@reduxjs/toolkit'
import dateSearch from '~/reducer/dataSearchSlice'
import counterProduct from '~/reducer/totalProductSlice'
import amountProduct from '~/reducer/amountSlice'
import favourite from '~/reducer/favourite'

export const store = configureStore({
    reducer: {
       dateSearch,
       counterProduct,
       amountProduct,
       favourite
    }
})