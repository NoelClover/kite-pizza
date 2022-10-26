import { AppReducers, AppDispatch } from './../store/store';
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { useDispatch } from 'react-redux';


export const useTypedSelector:TypedUseSelectorHook<AppReducers> = useSelector

export const useTypedDispatch = ()=> useDispatch<AppDispatch>()