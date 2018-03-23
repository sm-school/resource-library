import React from 'react';
import '../styles/components/App.scss';
import AddSite from './AddSite.js';
import SavedSitesContainer from '../containers/SavedSitesContainer.js';

function App () {
	return (
		<div className="row app">
			<AddSite />
			<SavedSitesContainer />
		</div>
	);
}

export default App;
