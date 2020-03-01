import React from 'react';

const Card = (props) => {
    const {phone} = props;
    return (
        <div className="bg-white black dib br3 ma2 grow bw2 shadow-2-l pointer">
            <img
                src={phone.imageFileName}
                className="br3"
                width="auto"
                height="200"
                alt="phones"
            />
            <div>
                <h2>{phone.name}</h2>
                <p className="b">
                    {phone.price}
                    <span role="img" aria-label="money-emoji">💲</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
