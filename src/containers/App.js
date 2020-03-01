import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPhones } from '../actions/actions';

import MainPage from '../components/mainPage/MainPage';

import './App.css';

const mapStateToProps = state => {
    return {
        phones: state.requestPhones.phones,
        isPending: state.requestPhones.isPending
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPhones: () => dispatch(requestPhones())
    };
};

class App extends Component {
    render() {
        return <MainPage {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
