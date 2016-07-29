import React, { PropTypes } from 'react'

class Tabs extends React.Component {

    tabChange(tab) {
        this.props.onChange(tab);
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


Tabs.defaultProps = {
    tabs: [],
    activeTab: null,
    onChange: () => {}
}

export default Tabs;
