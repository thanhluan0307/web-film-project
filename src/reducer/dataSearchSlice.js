import {createSlice} from '@reduxjs/toolkit'

const searchProductSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        addProduct: (state,actions) => {
          return  actions.payload
        },
    }
})
export const {addProduct} = searchProductSlice.actions
export default searchProductSlice.reducer