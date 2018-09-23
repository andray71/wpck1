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
export default (state:State = initState ,action: actionType): State => {
    state.count = state.count||0
    switch (action.type)  {
        case actions.INCREMENT:{
            return {...state,count:state.count+1}
        }
        case actions.DECREMENT:{
            return {...state,count:state.count-1}
        }
        case actions.LOADING:
            return {
                ...state,
                state: "Loading",
                name: action.payload.name||state.name,

            }
        case actions.LOADED:
            return {
                ...state,
                state: "Loaded",
                name: action.payload.name||state.name,
            }
        default:
            return state
    }
}