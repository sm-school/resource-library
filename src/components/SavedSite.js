import React from 'react';
import PropTypes from 'prop-types';

class SavedSite extends React.Component {
	render() {
		return (
			<li>
				{this.props.site.title}<br />
				{this.props.site.url}<br />
				Saved on: {this.props.site.added}
			</li>
		);
	}
}

SavedSite.propTypes = {
	// deleteSite: PropTypes.func,
	site: PropTypes.object,
};

export default SavedSites;