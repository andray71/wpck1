import React,{Component} from "react"
import { Provider } from 'react-redux'

import store from '../store'
import Router from '../router'


class Main extends Component{
    render(){
        return <Provider store={store}>
            <Router />
        </Provider>
    }
}
export default Main