import {Dispatch} from 'redux'
import {actionCreator} from './types'
import {nameAction} from "./types";
import { actions } from "./actionTypes";
import {hello} from "./hello-world"

export const loading:nameAction = (name?:string) => {
    return (dispatch: Dispatch) => {
        console.log("src/actions/app loading",hello(name?name:""),actions)
        return dispatch(actionCreator(actions.LOADING,{name}))
    }
}
export const loaded:nameAction = (name?:string) => {
    return (dispatch: Dispatch) => {
        return dispatch(actionCreator(actions.LOADED,{name}))
    }
}
