import React from 'react';
import FileDir from './Tree.js'
let props = {
	data:[
	  {
	  	id:"a",
	  	source:"",
	  	target:"b"
	  },
	  {
	  	id:"e",
	  	source:"",
	  	target:"f"
	  },
	  {
		id:"b",
	    source:"a",
	    target:"c"
	  },
	  {
	  	id:"b",
	    source:"a",
	    target:"d"
	  },
	  {
	  	id:"f",
		source:"e",
		target:"g"
	  },
	  {
	  	id:"f",
	  	source:"e",
	  	target:"g"
	  },
	  {
	  	id:"c",
	  	source:"b",
	  	target:"l"
	  },
	  {
	  	id:"c",
	  	source:"b",
	  	target:"m"
	  },
	  {
	  	id:"d",
	  	source:"b",
	  	target:"j"
	  },
	  {
	  	id:"d",
	  	source:"b",
	  	target:"k"
	  },
	  {
	  	id:"g",
	  	source:"f",
	  	target:"y"
	  },
	  {
	  	id:"g",
	  	source:"f",
	  	target:"z"
	  },
	  {
	  	id:"h",
	  	source:"f",
	  	target:""
	  },
	   {
	  	id:"l",
	  	source:"c",
	  	target:""
	  },
	  {
	  	id:"m",
	  	source:"c",
	  	target:""
	  },
	  {
	  	id:"j",
	  	source:"d",
	  	target:""
	  },
	   {
	  	id:"k",
	  	source:"d",
	  	target:""
	  },
	  {
	  	id:"y",
	  	source:"g",
	  	target:""
	  },
	  {
	  	id:"z",
	  	source:"g",
	  	target:""
	  },
	  {
	  	id:"q",
	  	source:"",
	  	target:""
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
        		<FileDir {...props}/>
        	</div>
        )
    }
}

export default Test;