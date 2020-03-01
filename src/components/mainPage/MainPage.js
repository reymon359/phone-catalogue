import React, { Component } from 'react';

export class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestPhones();
    }

    render() {
        return <div className="tc">hi</div>;
    }
}

export default MainPage;
