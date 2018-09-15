import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import Header from '../../components/header'
import * as actions from "../../actions/app";
import styles from './page.css'

class Page extends Component {
    render() {
        return (
            <div className={styles.page}>
                <Header title={this.props.title} isLoading={this.props.isLoading}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Page.propTypes = {
    title: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
}
function mapStateToProps(state) {
    return {
        app: state.app,
    };
}
const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
