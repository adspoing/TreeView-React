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
        timetd.style.padding = '0px';
        timeline.style.width = tWidth+'px';
        timeline.style.height = '10px';
        timeline.style.background = 'red';
        timeline.style.margin= '0px '+endWidth+'px 0px '+startWidth+'px';
    }
    render() {
        return (
        	<td ref='timetd'><div ref="timeline"></div></td>
        )
    }
}

export default Timeline;
