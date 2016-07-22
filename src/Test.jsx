import React from 'react';
import Process from './Process.js'
// let props = {
// 	data:[
// 	  {
// 	  	id:"a",
// 	  	source:"",
// 	  	target:"b"
// 	  },
// 	  {
// 	  	id:"e",
// 	  	source:"",
// 	  	target:"f"
// 	  },
// 	  {
// 		id:"b",
// 	    source:"a",
// 	    target:"c"
// 	  },
// 	  {
// 	  	id:"b",
// 	    source:"a",
// 	    target:"d"
// 	  },
// 	  {
// 	  	id:"f",
// 		source:"e",
// 		target:"g"
// 	  },
// 	  {
// 	  	id:"f",
// 	  	source:"e",
// 	  	target:"g"
// 	  },
// 	  {
// 	  	id:"c",
// 	  	source:"b",
// 	  	target:"l"
// 	  },
// 	  {
// 	  	id:"c",
// 	  	source:"b",
// 	  	target:"m"
// 	  },
// 	  {
// 	  	id:"d",
// 	  	source:"b",
// 	  	target:"j"
// 	  },
// 	  {
// 	  	id:"d",
// 	  	source:"b",
// 	  	target:"k"
// 	  },
// 	  {
// 	  	id:"g",
// 	  	source:"f",
// 	  	target:"y"
// 	  },
// 	  {
// 	  	id:"g",
// 	  	source:"f",
// 	  	target:"z"
// 	  },
// 	  {
// 	  	id:"h",
// 	  	source:"f",
// 	  	target:""
// 	  },
// 	   {
// 	  	id:"l",
// 	  	source:"c",
// 	  	target:""
// 	  },
// 	  {
// 	  	id:"m",
// 	  	source:"c",
// 	  	target:""
// 	  },
// 	  {
// 	  	id:"j",
// 	  	source:"d",
// 	  	target:""
// 	  },
// 	   {
// 	  	id:"k",
// 	  	source:"d",
// 	  	target:""
// 	  },
// 	  {
// 	  	id:"y",
// 	  	source:"g",
// 	  	target:""
// 	  },
// 	  {
// 	  	id:"z",
// 	  	source:"g",
// 	  	target:""
// 	  },
// 	  {
// 	  	id:"q",
// 	  	source:"",
// 	  	target:""
// 	  }
// 	]
// }

let props={
	data:[
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
	],
	data2:[
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
		}
	]
}
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
    }
    render() {
        return (
        	<div>
        		<Process {...props}/>
        	</div>
        )
    }
}

export default Test;
