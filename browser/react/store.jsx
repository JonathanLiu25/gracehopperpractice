import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  )
)

export default store
