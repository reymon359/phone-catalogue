import React, { Component } from 'react';

import CardList from '../cardList/CardList';
import CardDetails from '../cardDetails/CardDetails'
import Header from '../header/Header';
import { BrowserRouter, Route,  Switch, Link} from 'react-router-dom';
export class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestPhones();
    }

    render() {
        const { isPending , phones } = this.props;

        return (
            <div className="tc white">
            <BrowserRouter>
                <Link className='link dim' to='/' > <Header/></Link>
               <Switch>
               <Route exact path="/" render={() => (
                    isPending ? <h1>Loading...</h1> :
                    <CardList phones={phones} />
               )} />
                <Route path="/details/:id" render={(props) => (
                    <CardDetails id={props.match.params.phoneId} />
                )} />
                </Switch>
            </BrowserRouter>
            </div>
        );
    }
}

export default MainPage;
