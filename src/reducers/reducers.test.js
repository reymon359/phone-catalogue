import * as reducers from './reducers';
import * as types from '../actions/constants';

const initialStatePhones = {
    phones: [],
    isPending: false,
    error: ''
};

describe('requestPhones reducer', () => {
    it('should handle REQUEST_PHONES_PENDING action', () => {
        expect(
            reducers.requestPhones(initialStatePhones, {
                type: types.REQUEST_PHONES_PENDING
            })
        ).toEqual({
            phones: [],
            error: '',
            isPending: true
        });
    });

    it('should handle REQUEST_PHONES_SUCCESS action', () => {
        expect(
            reducers.requestPhones(initialStatePhones, {
                type: types.REQUEST_PHONES_SUCCESS,
                payload: [
                    {
                        id: 2,
                        name: 'Honor 10',
                        color: 'blue',
                        price: 399
                    }
                ]
            })
        ).toEqual({
            phones: [
                {
                    id: 2,
                    name: 'Honor 10',
                    color: 'blue',
                    price: 399
                }
            ],
            error: '',
            isPending: false
        });
    });

    it('should handle REQUEST_PHONES_FAILED action', () => {
        expect(
            reducers.requestPhones(initialStatePhones, {
                type: types.REQUEST_PHONES_FAILED,
                payload: 'test error'
            })
        ).toEqual({
            phones: [],
            error: 'test error',
            isPending: false
        });
    });
});
