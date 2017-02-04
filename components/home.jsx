import React from 'react';

class Home extends React.Component {
	render() {
		let updates = {
			'general': [
				{
					'text': 'test1',
					'ts': 100,
				},
				{
					'text': 'test2',
					'ts': 200,
				}
			]
		};

		let slackFeed = updates['general'].map(function(currEl) {
			return (
				<ul>
				    <li>
				    	<h5>
				    		Update: {currEl['text']}
				    	</h5>
				    	<p>Posted at: {currEl['ts']}</p>
				    </li>
			  </ul>
			)
		}, this);

		return <div>{slackFeed}</div>;
	}
}

export default Home;