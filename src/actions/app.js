const name  = "Andray's application"

export function loading (name) {
    return (dispatch) => {
        return dispatch({type:"App.LOADING",name})
    }
}
export function loaded (name) {
    return (dispatch) => {
        return dispatch({type:"App.LOADED",name})
    }
}

// export const loading = (name) => ({type:"App.LOADING",name})
// export const loaded = (name) => ({type:"App.LOADED",name})