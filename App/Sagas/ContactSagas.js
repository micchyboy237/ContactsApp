import { call, put } from 'redux-saga/effects'
import ContactActions from '../Redux/ContactRedux'

export function * getAllContacts (api, action) {
  const response = yield call(api.getAllContacts)

  console.tron.log('getAllContacts', response)

  const { data } = response

  if (response.ok) {
    yield put(ContactActions.getAllContactsSuccess(data))
  } else {
    yield put(ContactActions.getAllContactsFailed(data.message))
  }
}

export function * createContact (api, action) {
  const details = action
  const response = yield call(api.createContact, details)

  console.tron.log('createContact', response)

  const { data } = response

  if (response.ok) {
    yield put(ContactActions.createContactSuccess(data))
  } else {
    yield put(ContactActions.createContactFailed(data.message))
  }
}