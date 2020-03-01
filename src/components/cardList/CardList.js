import React from 'react';
import Card from '../card/Card';

const CardList = ({ phones }) => {
    return (
        <div>
            {phones.map((phone, i) => (
                <Card phone={phone} key={i}/>
            ))}
        </div>
    );
};

export default CardList;