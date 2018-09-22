import {Dispatch} from "redux";

export type DispatchAction =  (dispatch:Dispatch)=>void
export interface nameAction {
    (name?:string):DispatchAction
}
