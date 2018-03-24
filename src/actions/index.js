import {
	DELETE_SAVED_SITE,
	RECEIVE_SAVED_SITES,
} from './types';

export const deleteSite = siteId => {
	return {
		type: DELETE_SAVED_SITE,
		siteId,
	};
};

function receiveSavedSites (savedSites) {
	return {
		type: RECEIVE_SAVED_SITES,
		savedSites,
	};
}

function fetchSavedSites () {
	return (dispatch) => {
		return fetch( 'http://localhost/api/sites/all' )
			.then( response => response.json() )
			.then( results => {
				console.log('Fetched', results);
				dispatch( receiveSearch(results) );
			} );
	};
}

export const loadSavedSites = () => {
	return (dispatch) => {
		return dispatch(fetchSavedSites());
	};
};
