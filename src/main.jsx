import React from 'react';
import ReactDom from 'react-dom';
import Test from './Test.jsx';
require('./main.less');
require('./components/tabs/index.less');



ReactDom.render(<Test/>, document.querySelector('#container'));