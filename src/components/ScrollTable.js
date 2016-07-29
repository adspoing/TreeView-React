import React from 'react';
import BodyScrollTable from './BodyScrollTable'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchThing} from '../actions/actions.js'
                    		// {tableBody.map((element,index) =>(<tr key={index}>element.fileChangeMethod</tr>))}

class ScrollTable extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ScrollTable';
    }
    render() {
        var { tabs, activeTab ,tableHead } = this.props;
        activeTab = activeTab === 0 ? tabs[0].Name : activeTab;
        let head=[];
        let headData = tableHead.head[activeTab];
        let tableBody = this.props.tableBody;
        let tableArr = React.Children.toArray(tableBody);
        console.log(tableArr);
        return (
        	<BodyScrollTable>
                    <BodyScrollTable.Thead>
                    	<tr>
                    		{headData.map((element,index) =>(<th key={index}>{element.Des}</th>))}
                    	</tr>
                    </BodyScrollTable.Thead>
                    <BodyScrollTable.Tbody>
                    </BodyScrollTable.Tbody>
            </BodyScrollTable>
        )
    }
}
function mapStateToProps (state){
    return {
        activeTab: state.activeTab,
        tableBody: state.tableBody
    }
}

function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators({
        },dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollTable);
