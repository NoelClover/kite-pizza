import  userReducer  from './userReducer/userReducer';
import { combineReducers,configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    user:userReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })

}
export type AppStore = ReturnType<typeof setupStore>
export type AppReducers = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']