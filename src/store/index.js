import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter
 //    , routerMiddleware
 } from 'connected-react-router'
import rootReducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory()

const enhancer = composeEnhancers(
    //applyMiddleware(thunk,routerMiddleware(history)),
    applyMiddleware(thunk),
    // other store enhancers if any
)

export default createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    {app:{hello:"world"}},
    enhancer,
)
