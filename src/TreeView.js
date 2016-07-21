import React from 'react';

class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TreeView';
    }
    render() {
    	var children;
    	if(this.props.node.children!=null){
    		children = this.props.node.children.map(function(node, index) {
        		return <li key={index}><TreeView node={node} /></li>
      		});
    	}
        return (
        	<li>
	        	<h5>
	        	    {this.props.node.id}
	        	</h5>
	        	<ul>
	        		{children}
	        	</ul>
        	</li>
        )
    }
}

export default TreeView;
