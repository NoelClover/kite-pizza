import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count:0
}

export const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        addCount(state,actions){
            state.count+=1
            console.log('add');
            
        }
    }
})

export default userReducer.reducer
export const {addCount} =  userReducer.actions