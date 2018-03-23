import PropTypes from 'prop-types';
import React from 'react';

class Example extends React.Component {
	render(){
		return (
			<div>
				Containers go here
			</div>
		);
	}
};

Example.propTypes = {
	example: PropTypes.string,
};

export default Example;
