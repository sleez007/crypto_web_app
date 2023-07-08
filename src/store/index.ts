import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../features/auth/slice';
import globalSlice from './global.store';
import { productSlice } from '../features/products/slice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
//import storage from 'redux-persist/es/storage';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['global']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  [authSlice.reducerPath]: authSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
  'global': globalSlice,
 }))


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleWares) => getMiddleWares({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(authSlice.middleware).concat(productSlice.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch