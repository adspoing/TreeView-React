import React from 'react';
import ReactDom from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Timeline';
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount = () => {
    	let timeline = ReactDom.findDOMNode(this.refs.timeline);
        let timetd = ReactDom.findDOMNode(this.refs.timetd);
    	let allTime = this.props.lastEndTime - this.props.earlyStartTime;
    	let Time = this.props.endTime - this.props.startTime;
    	let tWidth = Time * 100 / allTime; 
    	let startWidth = (this.props.startTime - this.props.earlyStartTime) * 100 / allTime;
    	let endWidth = (this.props.lastEndTime - this.props.endTime) * 100 / allTime;
    	console.log (tWidth);
    	timetd.style.width = '100px';
    	timeline.style.padding = '20px ' + endWidth+'px '+'10px ' +startWidth+'px'; 
        timeline.style.background = 'red';
    }
    render() {
        return (
        	<td ref='timetd'><span ref="timeline"></span></td>
        )
    }
}

export default Timeline;
