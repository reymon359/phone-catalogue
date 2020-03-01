import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('renders CardList component', () => {
    const mockPhones = [
        {
            id: 1,
            name: 'Nokia',
            price: '2',
            imageFileName: 'http://localhost:3002/images/Honor_10.png'
        }
    ];
    expect(shallow(<CardList phones={mockPhones} />)).toMatchSnapshot();
});
