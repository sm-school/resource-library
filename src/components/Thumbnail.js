import PropTypes from 'prop-types';
import React from 'react';

function Thumbnail (props) {
	const altText = "Thumbnail image for " + props.siteUrl;
	return (
		<div class="thumbnail">
			<img src={props.imageDataUrl} alt={altText} />
		</div>
	);
};

Thumbnail.propTypes = {
	imgDataUrl: PropTypes.string,
	siteUrl: PropTypes.string,
};

export default Thumbnail;
