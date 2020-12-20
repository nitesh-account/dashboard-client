import {takeEvery, call, put} from 'redux-saga/effects'
import { types } from '../types'
import { fetchDataSuccess } from '../actions'

import axios from 'axios'

function* asyncFetchRequest(action) {
    try{
        //const url = `https://reqres.in/api/users/${action.payload}`
        const url = `https://dashboard-project.herokuapp.com/posts`
        
        const response = yield call(()=>axios.get(url))
        console.log(response);
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        console.log(error);
    }
}

export function* watchDashboardSaga(){
    yield takeEvery ( types.SEND_REQUEST, asyncFetchRequest)
}