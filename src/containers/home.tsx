import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators,Dispatch} from 'redux'
import {History} from 'history'
import Page from './page/page'
import * as actions from '../actions/app'

interface AppStore {
    count: number,
    state: string
}
export interface Props {
    loading: ()=>void,
    loaded: ()=>void,
    app: AppStore,
    history: History
}

class Home extends React.Component<Props,{}> {

    componentDidMount() {
        this.props.loading()
        setTimeout(()=>{
            this.props.loaded()
        },2000)
    }


    render() {
        console.log(this.props)
        const title = `Home ${this.props.app.count}`
        return <Page title={title} isLoading={this.props.app.state == 'Loading'}>
            <span>this is home page</span>
            <button
                onClick={() => this.props.history.push("/about")}
            >about
            </button>
        </Page>;
    }
}

function mapStateToProps(state:{app:AppStore}) {
    return {
        app: state.app,
    };
}
function mapDispatchToProps (dispatch:Dispatch, ownProps:{}) {
    const bac = bindActionCreators(actions, dispatch)
    console.log("src/containers/home mapDispatchToProps", bac)
    return bac
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
// @ts-ignore
 Home
);









