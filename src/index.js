import React from 'react'
import ReactDom from 'react-dom'
import Main from './containers/main'
ReactDom.render(<Main/>,document.getElementById("app"));

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}