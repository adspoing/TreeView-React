import React from 'react';
import Timeline from './Timeline.js';
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
    _getSign(id){
    	let arr=this.props.data2;
    	for(let x in arr){
    		if(arr[x].id == id)
    			return arr[x].signature;
    	}
    	return "";
    }
    _getParameter(id){
    	let arr=this.props.data2;
    	for(let x in arr){
    		if(arr[x].id == id)
    			return arr[x].parameter;
    	}
    	return "";
    }
    _getStartTime(id){
    	let arr=this.props.data2;
    	let time = "";
    	for(let x in arr){
    		if(arr[x].id == id)
    			{
    				time = arr[x].startTime;
    				break;
    			}
    	}
    	var newDate = new Date();
    	newDate.setTime(time * 1000);
    	return newDate.toLocaleString();
    }
    _getTimeStart(id){
    	let arr=this.props.data2;
    	for(let x in arr){
    		if(arr[x].id == id)
    			return arr[x].startTime;
    	}
    	return "";
    }
     _getEndTime(id){
    	let arr=this.props.data2;
    	let time = "";
    	for(let x in arr){
    		if(arr[x].id == id)
    			{
    				time = arr[x].endTime;
    				break;
    			}
    	}
    	var newDate = new Date();
    	newDate.setTime(time * 1000);
    	return newDate.toLocaleString();
    }
     _getTimeEnd(id){
    	let arr=this.props.data2;
    	for(let x in arr){
    		if(arr[x].id == id)
    			return arr[x].endTime;
    	}
    	return "";
    }
    _getEarlyTime(){
    	let arr=this.props.data2;
    	let min=4070883661; //2099年
    	for(let x in arr){
    		if(arr[x].startTime<min){
    			min=arr[x].startTime;
    		}
    	}
    	return min;
    }
    _getLastTime(){
    	let arr=this.props.data2;
    	let max=0; //2099年
    	for(let x in arr){
    		if(arr[x].endTime>max){
    			max=arr[x].endTime;
    		}
    	}
    	return max;
    }
    preorder(node,level){
    	if(node.id!=null)
    	this.test.push({
    		name:<td className={"TreeView"+level}>{this._getName(node.id)}</td>,
    		id:node.id,
    		idshow:<td>{node.id}</td>,
    		signature:<td>{this._getSign(node.id)}</td>,
    		parameter:<td>{this._getParameter(node.id)}</td>,
    		startTime:<td>{this._getStartTime(node.id)}</td>,
    		Timeline:<Timeline startTime={this._getTimeStart(node.id)}
    							endTime={this._getTimeEnd(node.id)}
    							earlyStartTime={this._getEarlyTime()}
    							lastEndTime={this._getLastTime()
    							} />,
    		endTime:<td>{this._getEndTime(node.id)}</td>
    		}
    	);
    	for(var x in node.children)
    	{
    		this.preorder(node.children[x],level+1);
    	}
    }
    render() {
    	var children;
    	console.log(this._getEarlyTime());
    	console.log(this._getLastTime());
    	this.preorder(this.props.node,0);
        return (
        	<tbody>
        		{this.test.map(element=>(<tr key={element.id}>{element.name}{element.idshow}{element.signature}{element.parameter}{element.startTime}{element.Timeline}{element.endTime}</tr>))}
        	</tbody>
        )
    }
}

export default TreeView;
