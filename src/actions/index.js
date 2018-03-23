import {
	DELETE_SAVED_SITE,
	SHOW_SAVED_SITES,
} from './types';

export const deleteSite = siteId => {
	return {
		type: DELETE_SAVED_SITE,
		siteId,
	};
};

export const showSavedSites = savedSites => {
	return {
		type: SHOW_SAVED_SITES,
		savedSites,
	};
};

function receiveSavedSites(savedSites) {
	return {
		type: 'RECEIVE_SAVED_SITES',
		savedSites,
	};
}

function fetchSavedSites () {
	// fetch goes here
}

export const loadSavedSites = () => {
	return (dispatch) => {
		return dispatch(fetchSavedSites());
	};
};
