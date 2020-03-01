import React from 'react';
import { useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';

const CardDetails = (props) => {
    const { id } = useParams();
    const phone = props.phones[id];
    return (
        <div className="bg-white black mw7 dib br3 ma8  bw2 shadow-2-l">
            <img
                src={phone.imageFileName}
                className="br3"
                width="auto"
                height="400"
                alt="phones"
            />
            <div>
                <h2>{phone.name}</h2>
                <p className="b">{phone.price} 
                    <span role='img' aria-label='money-emoji'>💲</span>
                </p>
                <h3>Details:</h3>
                <p>Color: {phone.color}</p>
                <p>Processor: {phone.processor}</p>
                <p>Screen: {phone.screen}</p>
                <p>RAM: {phone.ram} GB</p>
                <h3>Description:</h3>
                <p className="ph6">{phone.description}</p>
            </div>
            <Link  className="f6 link dim ph3 pv2 br3 mb2 dib white bg-near-black" to='/' > 
                Back home 
            </Link>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        phones: state.requestPhones.phones
    };
}

export default connect(mapStateToProps, null)(CardDetails);
