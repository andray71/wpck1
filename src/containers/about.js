import React, {Component} from 'react';
import {connect} from 'react-redux';
import Page from './page/page'
class About extends Component {
    render() {
        return (
            <Page title="About" >
                <span>this is about page</span>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(About);
