import React from 'react';
import ReactDom from 'react-dom';
import Test from './Test.jsx';
require('./main.less');


ReactDom.render(<Test/>, document.querySelector('#container'));