import { shallow } from 'enzyme';
import React from 'react';
import Intro from './Intro';

it('should render Intro component', () => {
    expect(shallow(<Intro />)).toMatchSnapshot();
});
