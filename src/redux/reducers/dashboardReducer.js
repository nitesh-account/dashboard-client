import { types } from '../types'

const initalState = {
    loading: false,
    randomData: {},
    error: {}
}

const dashboardReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SEND_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.DELETE_RANDOM_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case types.RESET_RANDOM_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.EXPIRE_RANDOM_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case types.GET_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case types.SEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                randomData: action.payload,
                error: {}
            }

        case types.SEND_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                randomData: {},
                error: action.error
            }
        default: return {
            state
        }
    }
}

export default dashboardReducer;