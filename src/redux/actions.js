import {types} from './types'

export function getRandomData(){
    return{
        type: types.GET_REQUEST,
    }
}

export function postRandomData(data){
    return{
        type: types.SEND_REQUEST,
        payload: data
    }
}

export function resetRandomData(){
    return{
        type: types.RESET_RANDOM_REQUEST,
    }
}

export function deleteRandomData(){
    return{
        type: types.DELETE_RANDOM_REQUEST,
    }
}

export function expireRandomData(){
    return{
        type: types.EXPIRE_RANDOM_REQUEST,
    }
}

export const fetchDataSuccess = (data) => {
    return{
        type: types.SEND_REQUEST_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return{
        type: types.SEND_REQUEST_ERROR,
        payload: {},
        error: error
    }
}