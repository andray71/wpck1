import mirrorObject from "../utils/mirrorObject";

const _stateActions = {
    LOADING: null,
    LOADED: null,
    ERROR: null,
}

export const stateActions = mirrorObject(_stateActions)

export const appActions = mirrorObject({
    ..._stateActions,
    INCREMENT: null,
    DECREMENT: null,
},"App");

export const stripNS = (s) => {
    if(typeof s !== "string") return s
    const lastIndex = s.lastIndexOf(".")
    return (lastIndex > 0)? s.substring(lastIndex):s
}