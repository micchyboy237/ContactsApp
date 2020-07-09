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

  const setToken = token => api.setHeader('Authorization', 'Bearer ' + token)
  const refreshToken = refreshToken => api.post('auth/refresh-tokens', { refreshToken })
  const register = (user) => api.post('auth/register', { ...user })
  const resendVerification = email => api.post('auth/resend-verification', { email })
  const sendForgotPassword = email => api.post('auth/forgot-password', { email })
  const resetPassword = (token, password) => api.post(`auth/reset-password?token=${token}`, { password })
  const login = (email, password) => api.post('auth/login', { email, password })
  const getAllSchools = () => api.get('schools')
  const getAllActivities = school => api.get('activities?isVerified=true')
  const inviteSchools = (schools, invitedBy) => api.post('schools/invite-schools', { schools, invitedBy })
  const update = (userId, details) => api.patch(`users/${userId}`, { ...details })
  const createFeed = (userId, description, feedType, files, category) => {
    const data = new FormData()
    data.append('user', userId)
    data.append('description', description)
    data.append('type', feedType)
    data.append('category', category ? category : '')

    files.forEach((file, index) => {
      data.append('files[]', { uri: file.url, type: file.type, name: 'mediafile' })
      data.append('captions[]', file.caption ? file.caption : '')
    })

    return api.post('feeds/create-feed', data, { headers: { 'Content-Type': 'multipart/form-data' } })
  }
  const getFeeds = (userId, type, category) => api.get(`feeds?user=${userId}&sortBy=updatedAt:desc`)

  return {
    setToken,
    refreshToken,
    getAllSchools,
    getAllActivities,
    inviteSchools,
    register,
    resendVerification,
    sendForgotPassword,
    resetPassword,
    login,
    update,
    createFeed,
    getFeeds,
  }
}

const api = create()

export default api
