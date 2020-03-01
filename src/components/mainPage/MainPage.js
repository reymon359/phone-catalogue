import React, { Component } from 'react';

import CardList from '../cardList/CardList';
import Header from '../header/Header';

export class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestPhones();
    }

    render() {
        const { isPending, phones } = this.props;

        return (
            <div className="tc white">
                <Header />
                {isPending ? <h1>Loading...</h1> : <CardList phones={phones} />}
            </div>
        );
    }
}

export default MainPage;
