import {Dispatch} from 'redux'
import {hello} from "./hello-world"
import {nameAction} from "./types";
import { actions } from "./actionTypes";

export const loading:nameAction = (name?:string) => {
    return (dispatch: Dispatch) => {
        console.log("src/actions/app loading",hello(name?name:""),actions)
        return dispatch({type:actions.LOADING,payload:{name}})
    }
}
export const loaded:nameAction = (name?:string) => {
    return (dispatch: Dispatch) => {
        return dispatch({type:actions.LOADED,payload:{name}})
    }
}
