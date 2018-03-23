import * as actions from '../src/actions';
import * as types from '../src/actions/types';

describe('actions', () => {
	it('should something', () => {
		const example = 'something';
		const exampleAction = {
			type: types.UPDATE_EXAMPLE,
			example
		};
		expect(actions.updateExample(example)).toEqual(exampleAction);
	});
});
