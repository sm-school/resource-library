import { connect } from 'react-redux';
import { deleteSavedSite, showSavedSites } from '../actions';
import SavedSites from '../components/SavedSites';

const getSavedSites = (state) => {
	return state.savedSites;
};

const mapStateToProps = state => ({ savedSites: getSavedSites(state) });

const mapDispatchToProps = dispatch => ({
	// deleteSavedSite: siteId => dispatch(deleteSavedSite(siteId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SavedSites);
