import {configureStore} from '@reduxjs/toolkit'
import searchProduc from '~/reducer/dataSearchSlice'

export const store = configureStore({
    reducer: {
       searchProduc
    }
})