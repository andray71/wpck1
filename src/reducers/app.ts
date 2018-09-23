import {appActions as actions, stripNS} from '../actions/actionTypes'
import {actionType} from './types'

export interface State {
    state: string,
    name:string,
    count:number,
    error?: {message:string},
}

const setState = (state: State, type:string): State => {
    return {...state,state:stripNS(type)}
}
const initState: State = {state:"INITIAL",
    name:"not set",
    count:0,
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
        case actions.ERROR:{
            return {
                ...setState(state,action.type),
                error: action.payload.error
            }
        }
        case actions.LOADING:
            return {
                ...setState(state,action.type),
                name: action.payload.name||state.name,
            }
        case actions.LOADED:
            return {
                ...setState(state,action.type),
                name: action.payload.name||state.name,
            }
        default:
            return state
    }
}