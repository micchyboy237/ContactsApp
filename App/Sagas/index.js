import { takeLatest, all } from 'redux-saga/effects'
import api from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ContactTypes } from '../Redux/ContactRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getAllContacts, createContact } from './ContactSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(ContactTypes.GET_ALL_CONTACTS, getAllContacts, api),
    takeLatest(ContactTypes.CREATE_CONTACT, createContact, api)
  ])
}
