import React, { Component } from 'react';


class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <div>
                <h1 className="f1  near-white pb2">
                    Phone Catalogue 
                    <span role='img' aria-label='phone-emoji'>📱</span>
                </h1>
            </div>
        );
    }
}

export default Header;