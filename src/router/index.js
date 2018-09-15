import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Route, browserHistory, Switch } from 'react-router'

import {createBrowserHistory} from 'history'
import {ConnectedRouter} from 'connected-react-router'
import Home from '../containers/home'
import About from '../containers/about'

const history = createBrowserHistory()

class RouterContainer extends Component {
    render() {
        return (
            <ConnectedRouter history={history} >
                    <Switch>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/about" component={About}/>
                    </Switch>
            </ConnectedRouter>
        );
    }
}

RouterContainer.propTypes = {
};


export default  RouterContainer;
