import React from 'react';

const Card = ({ id, name, price, imageFileName }) => {
    return (
        <div className="bg-white black dib br3 ma2 grow bw2 shadow-2-l pointer">
            <img
                src={imageFileName}
                className="br3"
                width="auto"
                height="200"
                alt="phones"
            />
            <div>
                <h2>{name}</h2>
                <p className="b">{price} 💲</p>
            </div>
        </div>
    );
};

export default Card;