import React from 'react';
import PropTypes from 'prop-types';

function SavedSite (props) {
	return (
		<li>
			{props.site.title}<br />
			{props.site.url}<br />
			Saved on: {props.site.added}
		</li>
	);
}

SavedSite.propTypes = {
	// deleteSite: PropTypes.func,
	site: PropTypes.object,
};

export default SavedSite;
