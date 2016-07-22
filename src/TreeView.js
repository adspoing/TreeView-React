import React from 'react';
class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TreeView';
        this.test=[];
        this.level=0;
    }
    _getName(id){
    	let arr=this.props.data2;
    	for(let x in arr){
    		if(arr[x].id == id)
    			return arr[x].name;
    	}
    	return "";
    }
    preorder(node,level){
    	if(node.id!=null)
    	this.test.push({
    		content:<td className={"TreeView"+level}>{this._getName(node.id)}</td>,
    		id:node.id
    		}
    	);
    	for(var x in node.children)
    	{
    		this.preorder(node.children[x],level+1);
    	}
    }
    render() {
    	var children;
    	this.preorder(this.props.node,0);
        return (
        	<tbody>
        		{this.test.map(element=>(<tr key={element.id}>{element.content}</tr>))}
        	</tbody>
        )
    }
}

export default TreeView;
