import {actions} from '../actions/actionTypes'
import {actionType} from './types'
export interface State {
    state: string,
    name:string,
    count:number
}
const initState: State = {state:"INITIAL",
    name:"not set",
    count:0
}
export default (
    state:State = initState ,action: actionType): State => {
    state.count = state.count||0
    switch (action.type)  {
        case actions.LOADING:
            return {
                ...state,
                state: "Loading",
                name: action.payload.name,
                count:++state.count,
            }
        case actions.LOADED:
            return {
                ...state,
                state: "Loaded",
                name: action.payload.name,
                count:++state.count,
            }
        default:
            return state
    }
}