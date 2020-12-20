import {takeEvery, call, put} from 'redux-saga/effects'
import { types } from '../types'
import { fetchDataSuccess } from '../actions'

import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
function* asyncGetRandomData() {
    try{
        //const url = `http://localhost:5000/randomdata`
        const url = `https://dashboard-project.herokuapp.com/randomdata`
        
        const response = yield call(()=>axios.get(url))        
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        toast.error('Some error occur while getting from server! Please check with administrator.',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
    }
}
function* asyncPostRandomData(action) {
    try{
        //const url = `http://localhost:5000/randomdata`
        const url = `https://dashboard-project.herokuapp.com/randomdata`
        
        const response = yield call(()=>axios.post(url))
        toast.success('Random data is saved successfully',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        toast.error('Some error occur while saving into server! Please check with administrator.',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
    }
}

function* asyncResetRandomData() {
    try{
        //const url = `http://localhost:5000/randomdata`
        const url = `https://dashboard-project.herokuapp.com/randomdata`
        
        const response = yield call(()=>axios.delete(url))
        toast.success('Random data is reset successfully',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        toast.error('Some error occur while deleting from server! Please check with administrator.',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
    }
}

function* asyncDeleteRandomData() {
    try{
        //const url = `http://localhost:5000/randomdata/setDeleted`
        const url = `https://dashboard-project.herokuapp.com/randomdata/setDeleted`
        
        const response = yield call(()=>axios.put(url))
        toast.success('Random data is set deleted successfully',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        toast.error('Some error occur while updating into server! Please check with administrator.',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
    }
}

function* asyncExpireRandomData() {
    try{
        //const url = `http://localhost:5000/randomdata/setExpired`
        const url = `https://dashboard-project.herokuapp.com/randomdata/setExpired`
        
        const response = yield call(()=>axios.put(url))
        toast.success('Random data is set expire successfully',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        toast.error('Some error occur while updating into server! Please check with administrator.',
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000
                    });
    }
}

export function* watchDashboardSaga(){
    yield takeEvery ( types.GET_REQUEST, asyncGetRandomData)
    yield takeEvery ( types.SEND_REQUEST, asyncPostRandomData)
    yield takeEvery ( types.RESET_RANDOM_REQUEST, asyncResetRandomData)
    yield takeEvery ( types.DELETE_RANDOM_REQUEST, asyncDeleteRandomData)
    yield takeEvery ( types.EXPIRE_RANDOM_REQUEST, asyncExpireRandomData)
}