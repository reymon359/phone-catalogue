import * as types from '../actions/constants';

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

const initialStatePhones = {
    phones: [],
    isPending: false,
    error: ''
};

export const requestPhones = (state = initialStatePhones, action = {}) => {
    switch (action.type) {
        case types.REQUEST_PHONES_PENDING:
            return updateObject(state, { isPending: true });
        case types.REQUEST_PHONES_SUCCESS:
            return updateObject(state, {
                phones: action.payload,
                isPending: false
            });
        case types.REQUEST_PHONES_FAILED:
            return updateObject(state, {
                error: action.payload,
                isPending: false
            });
        default:
            return state;
    }
};
