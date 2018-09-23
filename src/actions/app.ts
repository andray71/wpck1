import {Dispatch} from 'redux'
import {actionCreator} from './types'
import {nameAction, noArgsAction} from "./types";
import {appActions as actions } from "./actionTypes";
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

export const increment:noArgsAction = () => {
    return actionCreator(actions.INCREMENT)
}
export const decrement:noArgsAction = () => {
    return actionCreator(actions.DECREMENT)
}