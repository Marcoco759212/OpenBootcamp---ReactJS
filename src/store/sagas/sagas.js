import { takeLatest, call, put } from  'redux-saga/effects';
import axios from 'axios';

import {API_CALL_REQUEST} from './../actions/asyncActions'

//watcher SAGA
// Listens te API_CALL_REQUEST actions
export function* watcherSaga() {
    // Listens the action and starts a worker saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// WORKER SAGA
// IS called from watcher Saga, does the Login and Dispatches an action
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request));
        // we Obtain the token from response
        const token = response.data.token;

        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request){
    return function(){
        return(axios(request))
    }
}