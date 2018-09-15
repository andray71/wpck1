import React from 'react'
import ReactDom from 'react-dom'
import Main from './containers/main'
let j = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("hello world",...j)
//document.getElementsByTagName("body")[0].appendChild(document.createTextNode("hello world! again 8"))

ReactDom.render(<Main/>,document.getElementById("app"));

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}