import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/user/useSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './theme/themeSlice' // we created the name themeReducer



const rootReducer = combineReducers({
  user: userReducer, // ✅ Correct usage
  theme:themeReducer,
});

const persistconfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistconfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
