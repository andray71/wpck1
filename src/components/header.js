import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom'

require('../style/components/header.css');

class Header extends Component {

    render() {
        //  console.log(this.props)
        return (

            <header>
                <nav>
                    <ul>
                        <li>
                            <h1>{this.props.title}</h1>

                        </li>
                        <li>
                            <h3>{this.props.isLoading ? "Loading..." : null}</h3>
                        </li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>

        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
    ,isLoading: PropTypes.bool
};

export default Header;
