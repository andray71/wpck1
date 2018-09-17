import {hello} from "./hello-world"

export type disp = (obj: object) => void

export const loading = (name:string) => {
    return (dispatch: disp) => {
        console.log("src/actions/app loading",hello(""))
        return dispatch({type:"App.LOADING",name})
    }
}
export const loaded = (name:string) => {
    return (dispatch: disp) => {
        return dispatch({type:"App.LOADED",name})
    }
}

