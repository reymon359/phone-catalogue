import React, { Component } from 'react';

import Header from '../header/Header';

export class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestPhones();
    }

    render() {
        return (
            <div className="tc">
                <Header />
            </div>
        );
    }
}

export default MainPage;
