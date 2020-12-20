import { take, call, all} from 'redux-saga/effects'

import {watchDashboardSaga} from './dashboardSaga'

export default function* RootSaga() {
    yield all([
        watchDashboardSaga()
    ])
}