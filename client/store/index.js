import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userAuth from './userAuth'

const reducer = combineReducers({ userAuth })

let middleware

if(process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  ))
}
else {
  middleware = applyMiddleware(thunkMiddleware)
}

const store = createStore(reducer, middleware)

export * from './userAuth'

export default store
