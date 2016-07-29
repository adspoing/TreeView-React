import React from 'react';
import Tabs from './tabs'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changetab, fetchThing} from '../actions/actions.js'

class tabController extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'tabController';
    }

    _changeTabs(tab){
    	this.props.actions.changetab(tab);
        this.props.actions.fetchThing();
    }
    render() {
        return <Tabs tabs={this.props.tabs}
        		  onChange={this._changeTabs.bind(this)}
        		  activeTab={this.props.activeTab}/>
    }
}

function mapStateToProps (state){
    return {
        activeTab: state.activeTab
    }
}

function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators({
            changetab,
            fetchThing
        },dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(tabController);
