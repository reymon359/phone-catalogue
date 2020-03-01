import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestPhones: jest.fn(),
        phones: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});
it('should render MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});
