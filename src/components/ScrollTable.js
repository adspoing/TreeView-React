import React from 'react';
import BodyScrollTable from './BodyScrollTable'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
        activeTab: state.activeTab
    }
}

function mapDispatchToProps (dispatch){
    return {
        actions: bindActionCreators({
        },dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollTable);
