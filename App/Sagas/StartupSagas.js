import { call, put, select } from 'redux-saga/effects'
import ContactActions from '../Redux/ContactRedux'

// process STARTUP actions
export function * startup (api, action) {
  yield put(ContactActions.getAllContacts())
}
