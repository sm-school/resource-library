import React from 'react';
import PropTypes from 'prop-types';
import SavedSite from './SavedSite';

class SavedSites extends React.Component {
	render() {
		return (
			<div>
				<ul className="saved-sites">
					{this.props.savedSites.map( result => {
						return <SavedSite
							// deleteSite={this.props.deleteSite}
							site={result}
							key={result.siteId}
						/>;
					})}
				</ul>
			</div>
		);
	}
}

SavedSites.propTypes = {
	// deleteSite: PropTypes.func,
	savedSites: PropTypes.array,
};

export default SavedSites;