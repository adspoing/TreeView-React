import React from 'react';
import Tree from './Tree.js'
class Process extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Process';
    }
    render() {
        return (
        	<Tree {...this.props}/>
        )
    }
}

export default Process;
