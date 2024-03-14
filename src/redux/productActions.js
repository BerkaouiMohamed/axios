import axios from "axios"
import { ADD, DELETE, EDIT, FETCHING } from "./actionTypes"


export const addProduct=(data)=>{return{type:ADD,payload:data}}
export const deleteProduct=(data)=>{return{type:DELETE,payload:data}}
export const editProduct=(data)=>{return{type:EDIT,payload:data}}
export const fetching=()=>{return(dispatch)=>{axios.get('http://localhost:3000/products').then((res)=>dispatch(display(res.data))) }}
export const display=(data)=>{return { type:FETCHING,payload:data}}