import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expects to render Card component', () => {
    const mockPhone = [
        {
            id: 1,
            name: 'Nokia',
            price: '2',
            imageFileName: 'http://localhost:3002/images/Honor_10.png'
        }
    ];
    expect(shallow(<Card phone={mockPhone} />)).toMatchSnapshot();
});
