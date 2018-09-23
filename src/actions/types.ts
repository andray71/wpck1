import {Dispatch} from "redux";
import {actionType} from "../reducers/types";

export interface nameAction {
    (name?:string):DispatchAction
}
export interface noArgsAction {
    ():actionType
}
export type DispatchAction =  (dispatch:Dispatch)=>void

export const actionCreator:IActionCreator = (type: string,payload:any): actionType => {
    return {type,payload}
}
export const actionCreatorPlain:IActionCreator = (type: string,payload:any): actionType => {
    return {type,payload}
}

export interface IActionCreator {
    (type: string, payload?:any): actionType
}


