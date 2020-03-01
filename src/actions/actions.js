import {
    REQUEST_PHONES_PENDING,
    REQUEST_PHONES_SUCCESS,
    REQUEST_PHONES_FAILED
} from './constants.js';


export const requestPhones = () => dispatch => {
    dispatch({ type: REQUEST_PHONES_PENDING });
    return fetch('http://localhost:3002/phones')
        .then(response => {
            let contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            } else {
                throw new Error('Invalid JSON');
            }
        })
        .then(phones => {
            dispatch({ type: REQUEST_PHONES_SUCCESS, payload: phones });
        })
        .catch(error =>
            dispatch({ type: REQUEST_PHONES_FAILED, payload: error })
        );
};
