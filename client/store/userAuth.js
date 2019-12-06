import axios from 'axios'

const GOT_RESIDENT = 'GOT_RESIDENT'
const GOT_AGENT = 'GOT_AGENT'
const GOT_PROPERTY_MANAGER = 'GOT_PROPERTY_MANAGER'

const gotResident = resident => ({
  type: GOT_RESIDENT,
  payload: resident
})

const gotAgent = agent => ({
  type: GOT_AGENT,
  payload: agent
})

const gotPropertyManager = propertyManager => ({
  type: GOT_PROPERTY_MANAGER,
  payload: propertyManager
})

const parseUsertype = (usertype) => {
  if(usertype === 'resident') return gotResident
  if(usertype === 'agent') return gotAgent
  if(usertype === 'property-manager') return gotPropertyManager
}

export const authLogin = (email, password, history, usertype) => dispatch => {
  return axios.post(`/auth/login/${usertype}`, { email, password })
  .then(res => {
    console.log('FIRING', parseUsertype(usertype))
    dispatch(parseUsertype(usertype)(res.data))
    history.push('/homepage')
  })
  .catch(err => dispatch(parseUsertype(usertype, err.message)))
}

export const fetchUserThunk = () => (dispatch, usertype) => {
  axios.get(`/auth/me/${usertype}`)
  .then(res => dispatch(parseUsertype(usertype)(res.data)))
  .catch(err => dispatch(parseUsertype(usertype)(err.message)))
}

const reducer = (resident = {}, action) => {
  switch (action.type) {
    case GOT_RESIDENT:
      return action.payload
    default:
      return resident
  }
}

export default reducer
