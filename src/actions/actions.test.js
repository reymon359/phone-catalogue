import * as actions from './actions';
import * as types from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

export const mockStore = configureMockStore([thunkMiddleware]);
 
describe('Fetch phones actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('should create a Pending action on request Phones', () => {
        const store = mockStore();
        store.dispatch(actions.requestPhones());
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_PHONES_PENDING
        };
        expect(action[0]).toEqual(expectedAction);
    });

    it('should create a Success action on request Phones', () => {
        fetchMock.getOnce('http://localhost:3002/phones', {
            body: { phones: ['test phone'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: types.REQUEST_PHONES_PENDING },
            {
                type: types.REQUEST_PHONES_SUCCESS,
                payload: { phones: ['test phone'] }
            }
        ];
        const store = mockStore();
        return store.dispatch(actions.requestPhones()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a Failed action on request Phones', () => {
        fetchMock.mock('http://localhost:3002/phones', 400);

        const expectedActions = [
            { type: types.REQUEST_PHONES_PENDING },
            {
                type: types.REQUEST_PHONES_FAILED,
                payload: new Error('Invalid JSON')
            }
        ];
        const store = mockStore();
        return store.dispatch(actions.requestPhones()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
