import { all } from 'redux-saga/effects'
import login from './login';
import getUsers from './getUsers';
import addUsers from './addUser';
import updateUser from './updateUser';

export default function* rootSaga() {
  yield all([
    login(),
    getUsers(),
    addUsers(),
    updateUser()
  ])
}