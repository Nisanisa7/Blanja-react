import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';  

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['buyer'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
  export const persistor = persistStore(store);
