import React from 'react';
import Card from '../card/Card';

const CardList = ({ phones }) => {
    return (
        <div>
            {phones.map((phone, i) => {
                return (
                    <Card
                        key={i}
                        id={phones[i].id}
                        name={phones[i].name}
                        price={phones[i].price}
                        imageFileName={phones[i].imageFileName}
                    />
                );
            })}
        </div>
    );
};

export default CardList;