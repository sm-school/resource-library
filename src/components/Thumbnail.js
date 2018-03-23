import PropTypes from 'prop-types';
import React from 'react';

class Thumbnail extends React.Component {
	render(){
		const altText = "Thumbnail image for " + this.props.siteUrl;
		return (
			<div class="thumbnail">
				<img src={this.props.imageDataUrl} alt={altText} />
			</div>
		);
	}
};

Thumbnail.propTypes = {
	imgDataUrl: PropTypes.string,
	siteUrl: PropTypes.string,
};

export default Thumbnail;
