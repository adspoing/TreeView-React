import React from 'react';
import TreeView from './TreeView.js'
Array.prototype.unique=function(){
	    var newArr=[],obj={};
	    for(var i=0,len=this.length;i<len;i++){
	        if(!obj[this[i].id]){ 
	            newArr.push(this[i]);
	            obj[this[i].id]=true;
	        }
	    }
	    return newArr;
}

Array.prototype.contains = function (obj) {  
    var i = this.length;  
    while (i--) {  
        if (this[i].id === obj.id) {  
            return true;  
        }  
    }  
    return false;  
}  
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tree';
    }
   
    _loadTree(){
    	let processTree=this.props.processTree;
    	let firstLevel = [];
    	for(let x in processTree){
    		if(processTree[x].source== ""){
    			firstLevel.push({
    				id:processTree[x].id,
    				children:[]
    			})
    		}
    	}
    	let prevLevel=[];
    	let nowLevel=[];
    	prevLevel=firstLevel.unique();
  		
  		while(prevLevel.length!=0){
  			var len=prevLevel.length;
  			for(var i=0;i<len;i++){
  				    for(var x=0;x<processTree.length;x++){
  				    	if(processTree[x].source == prevLevel[i].id)
		    			{
		    				let tmpObj={
			    					id:processTree[x].id,
			    					children:[]
			    				};
		    				if(prevLevel[i].children.contains(tmpObj)==false)
			    				prevLevel[i].children.push(tmpObj);
		    				nowLevel.push(prevLevel[i].children[prevLevel[i].children.length-1]);
		    			}
  				    }
  			}
    		prevLevel=nowLevel.unique();
    		nowLevel=[];
  		}
  		return (firstLevel.unique());
    }
    render() {
    	let tree=this._loadTree();
        return (
        	<table>
        			{tree.map((element,index) =>(<TreeView {...this.props} key={index} node={element}/>))}
        	</table>
        )
    }
}

export default Tree;

