import { all } from 'redux-saga/effects';

import itemList from './itemList/saga';

export default function* rootSaga() {
    return yield all([itemList]);
}
