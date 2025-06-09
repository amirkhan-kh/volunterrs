import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './role-slice'
import loginUserSlice from './login-slice'
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
import { useDispatch } from 'react-redux';


const persistConfig = {
    key: 'root',
    storage,
};
const persistedRoleReducer = persistReducer(persistConfig, roleReducer);
export const store = configureStore({
  reducer: {
    role: persistedRoleReducer,
    login: loginUserSlice,

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
export const useAppDispatch: () => AppDispatch = useDispatch;