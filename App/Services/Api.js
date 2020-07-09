// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const API_URL = "http://164.90.176.194:3000"

const create = (baseURL = `${API_URL}/v1/`) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json'
    },
    // 60 second timeout...
    timeout: 60000
  })

  const createContact = (details) => api.post('contacts', details)
  const getAllContacts = () => api.get('contacts')

  return {
    createContact,
    getAllContacts
  }
}

const api = create()

export default api
