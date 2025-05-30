import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './role-slice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'root',
    storage,
};
const persistedRoleReducer = persistReducer(persistConfig, roleReducer);
export const store = configureStore({
  reducer: {
    role: persistedRoleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;