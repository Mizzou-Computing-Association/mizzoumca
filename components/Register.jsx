import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<div style={{margin: 0, height: '100%', overflow: 'hidden'}}>
				<iframe
					style={{
						position: 'absolute',
      			left:0,
			      right:0,
			      bottom:0,
			      top:0,
			      border:0
			    }}
					id="typeform-full"
					width="100%"
					height="100%"
					frameBorder="0"
					src="https://luke245.typeform.com/to/vXV09d"
				></iframe>
	  		<script
	  			type="text/javascript"
	  			src="https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js"
	  		></script>
			</div>
		);
	}
}

export default Register;