import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from './containers/DevTools'
import rootReducer from './reducers'

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}
