import React from 'react';
import renderer from 'react-test-renderer';

import Thumbnail from '../src/components/Thumbnail';

describe('Thumbnail', () => {
	it('matches the snapshot', () => {
		const tree = renderer.create(
			<Thumbnail
				// not actually an image - doesn't matter here
				imgDataUrl = 'data:image/jpeg;base64,dGVzdCBzdHJpbmc='
				siteUrl = 'nytimes.com'
			/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});