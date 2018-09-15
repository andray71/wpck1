import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Page from './page/page'
import * as actions from '../actions/app'
class Home extends Component {

    componentDidMount() {
        this.props.loading()
        setTimeout(()=>{
            this.props.loaded()
        },2000)
    }


    render() {
        console.log(this.props)
        const title = `Home ${this.props.app.count}`
        return (
            <Page title={title} isLoading={this.props.app.state == 'Loading'} >
                <span>this is home page</span>
                <button
                    onClick={() => this.props.history.push("/about")}
                >about</button>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        app:state.app,
    };
}
function mapDispatchToProps (dispatch, ownProps) {
    const bac = bindActionCreators(actions, dispatch)
    console.log("src/containers/home mapDispatchToProps", bac)
    return bac
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
