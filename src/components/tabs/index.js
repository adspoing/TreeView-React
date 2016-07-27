import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changetab} from '../../actions/actions.js'
class Tabs extends React.Component {

    tabChange(tab) {
        this.props.actions.changetab(tab);
    }

    render () {
        var { tabs, activeTab } = this.props;

        var tabDoms = tabs.map((d, i) => {
            var active = activeTab ? (d.Name === activeTab) : (i === 0);
            return (
                <li key={i}
                    className={active ? 'active' : ''}
                    onClick={this.tabChange.bind(this, d)}>
                    <span>{d.Des}</span>
                </li>
            )
        })

        return (
            <ul className="tabs-wrapper">
                {tabDoms}
            </ul>
        )
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
            changetab
        },dispatch)
    }
}
Tabs.defaultProps = {
    tabs: [],
    activeTab: null,
    onChange: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
