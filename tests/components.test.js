import React from 'react';
import Example from '../src/components/Example';
import renderer from 'react-test-renderer';

describe('Example', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});