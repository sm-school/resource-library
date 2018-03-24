import {
	DELETE_SAVED_SITE,
	RECEIVE_SAVED_SITES,
} from '../actions/types';

const savedSites = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_SAVED_SITES:
			return action.savedSites;
		default:
			return state;
	}
};

export default savedSites;
