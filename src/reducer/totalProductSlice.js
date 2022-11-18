import {createSlice} from '@reduxjs/toolkit'

export const totalProductSlice=createSlice({
    name:'totalProduct',
    initialState:0,
    reducers:{
        counterTotalProduct:(state)=>{
            if (localStorage.getItem('myStore')){
                let Storage=JSON.parse(localStorage.getItem('myStore'))
                return state=Storage.length
            }
            else return 0
        },
    }
})

export default totalProductSlice.reducer
export const {counterTotalProduct} =totalProductSlice.actions