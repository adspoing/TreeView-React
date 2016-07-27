import React from 'react';
import Process from './components/Process.js';
import { render } from 'react-dom';
import store from './stores/store.js';
import {Provider} from 'react-redux';
import Tabs from './components/tabs';
import BodyScrollTable from './components/ScrollTable.js'
let props={
	processTree:[
	{
		id:"424",
		source:"",
		target:"1213"
	},
	{
		id:"1213",
		source:"424",
		target:"1424"
	},
	{
		id:"1424",
		source:"1213",
		target:"5534"
	},	
	{
		id:"1424",
		source:"1213",
		target:"646"
	},	
	{
		id:"5534",
		source:"1424",
		target:""
	},	
	{
		id:"646",
		source:"1424",
		target:""
	},	
	{
		id:"23",
		source:"1424",
		target:""
	},	
	{
		id:"5534",
		source:"1424",
		target:""
	},	
	{
		id:"9435",
		source:"1424",
		target:""
	},
	{
		id:"2314",
		source:"1424",
		target:""
	},	
	{
		id:"2363",
		source:"1424",
		target:""
	},	
	{
		id:"21",
		source:"1424",
		target:""
	},	
	{
		id:"1080",
		source:"",
		target:""
	}	
	],
	processInfo:[
		{
		id:"424",
		name:"wininit.exe",
		signature:"Sysinternals",
		parameter:"wininit.exe",
		startTime:"1468468911",
		endTime:"1468468980"
		},
		{
		id:"1213",
		name:"services.exe",
		signature:"Sysinternals",
		parameter:"C:\\Windows\\system32\\services.exe",
		startTime:"1468468915",
		endTime:"1468468982"
		},
		{
		id:"1424",
		name:"svchost.exe",
		signature:"Sysinternals",
		parameter:"C:\\Windows\\system32\\svchost.exe -k DcomLaunch",
		startTime:"1468468916",
		endTime:"1468468996"
		},
		{
		id:"5534",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468916",
		endTime:"1468468986"
		},
		{
		id:"646",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468917",
		endTime:"1468468987"
		},
		{
		id:"23",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468918",
		endTime:"1468468988"
		},
		{
		id:"9435",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468918",
		endTime:"1468468990"
		},
		{
		id:"2314",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468919",
		endTime:"1468468993"
		},
		{
		id:"2363",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468921",
		endTime:"1468468996"
		},
		{
		id:"21",
		name:"igfxEM.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468923",
		endTime:"1468468998"
		},
		{
		id:"1080",
		name:"wechat.exe",
		signature:"Sysinternals",
		parameter:" C:\\Windows\\system32\\igfxEM.exe\" -Embedding",
		startTime:"1468468960",
		endTime:"1468468970"
		}
	]
}



let tabs=[{
    Name: 'origin',
    Des: '进程原始事件'
},
{
    Name: 'fileChange',
    Des: '文件变更'
},
{
    Name: 'access',
    Des: '网络访问'
},
{
    Name: 'regeditChange',
    Des: '进程原始事件'
},
{
    Name: 'keyAction',
    Des: '关键行为'
}]

let tableHead={
	head :{
		'origin':[
			{
				Name:'eventType',
				Des:'事件类型'
			},
			{
				Name:'dataInfo',
				Des:'数据详情'
			},
			{
				Name:'occurTime',
				Des:'发生时间'	
			}
		],
		'fileChange':[
			{
				Name:'fileName',
				Des:'文件名'
			},
			{
				Name:'fileMD5',
				Des:'文件MD5'
			},
			{
				Name:'fileChangeMethod',
				Des:'文件变更触发类型'
			},
			{
				Name:'fileChangeType',
				Des:'文件变更方式'
			},
			{
				Name:'occurTime',
				Des:'发生时间'
			}
		],
		'access':[
			{
				Name:'target',
				Des:'访问目标'
			},
			{
				Name:'process',
				Des:'访问进程'
			},
			{
				Name:'cmd',
				Des:'运行命令'
			},
			{
				Name:'netacess',
				Des:'网络访问'
			},
			{
				Name:'occurTime',
				Des:'发生时间'
			}
		],
		'regeditChange':[
			{
				Name:'location',
				Des:'注册表位置'
			},
			{
				Name:'changeType',
				Des:'变更方式'
			},
			{
				Name:'name',
				Des:'名称'
			},
			{
				Name:'changeResult',
				Des:'变更结果'
			},
			{
				Name:'changeTime',
				Des:'变更次数'
			}
		]
	}
}
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
    }
    render() {
        return (
        	<Provider store={store}>
	        	<div>
	        		<Process {...props}/>
	        		<Tabs tabs={tabs}/>
					<BodyScrollTable tableHead={tableHead}
									 tabs={tabs}/>
                </div>
        	</Provider>
        )
    }
}

export default Test;
