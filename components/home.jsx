import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<ul>
			  {% for message in updates['general'] %}
			    <li><h5>Update: {{ message['text']|safe }}</h5><p>Posted at: {{message['ts']}}</p></li>
			  {% endfor %}
		  </ul>
		);
	}
}

export default Home;