import React from 'react';
import PropTypes from 'prop-types';
import SavedSite from './SavedSite';

function SavedSites (props) {
	return (
		<div>
			<ul className="saved-sites">
				{props.savedSites.map( result => {
					return <SavedSite
						// deleteSite={props.deleteSite}
						site={result}
						key={result.siteId}
					/>;
				})}
			</ul>
		</div>
	);
}

SavedSites.propTypes = {
	// deleteSite: PropTypes.func,
	savedSites: PropTypes.array,
};

export default SavedSites;
