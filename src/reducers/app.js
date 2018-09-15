

export default function(state = state||{state:"INITIAL",name:"not set",count:0},action)  {
    state.count = state.count||0
    switch (action.type) {
        case "App.LOADING":
            return {
                ...state,
                state: "Loading",
                name: action.name,
                count:++state.count,
            }
        case "App.LOADED":
            return {
                ...state,
                state: "Loaded",
                name: action.name,
                count:++state.count,
            }
        default:
            return state
    }
}