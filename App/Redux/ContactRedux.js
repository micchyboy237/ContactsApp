import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createContact: ['details'],
  createContactSuccess: ['contact'],
  createContactFailed: ['error'],
  getAllContacts: null,
  getAllContactsSuccess: ['contacts'],
  getAllContactsFailed: ['error']
})

export const ContactTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  contacts: [],
})

/* ------------- Selectors ------------- */

export const getContacts = state => state.contact.contacts
export const isCreateContactSucceeded = state => state.contact.success
export const getCreateContactError = state => state.contact.error

export const ContactSelectors = {
  getContacts,
  getCreateContactError,
  isCreateContactSucceeded
}

/* ------------- Reducers ------------- */
export const createContact = state => state.merge({success: false, error: ""})
export const createContactSuccess = (state, action) => state.merge({ success: true, error: "", contacts: state.contacts.concat(action.contact) })
export const createContactFailed = (state, action) => state.merge({ error: action.error })

export const getAllContacts = state => state.merge({})
export const getAllContactsSuccess = (state, action) => state.merge({ contacts: action.contacts })
export const getAllContactsFailed = (state, action) => state.merge({ error: action.error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_CONTACT]: createContact,
  [Types.CREATE_CONTACT_SUCCESS]: createContactSuccess,
  [Types.CREATE_CONTACT_FAILED]: createContactFailed,

  [Types.GET_ALL_CONTACTS]: getAllContacts,
  [Types.GET_ALL_CONTACTS_SUCCESS]: getAllContactsSuccess,
  [Types.GET_ALL_CONTACTS_FAILED]: getAllContactsFailed
})
