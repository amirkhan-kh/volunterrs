import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './role-slice'
import loginUserSlice from './login-slice'
import verifyReducer from './verify-code-slice'
import volinterLogin from './volunter-post/index';
import postLogin from './login-post/index';
import investorRegisterReducer from './investor-post/index';
import getVolunteerProfileReducer from './volunter-get/index';
import userPutReducer from './profile-edit'
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
import userMeGet from './gets/get-me'
import payments from './payment-post/index';
const persistConfig = {
    key: 'root',
    storage,
};
const persistedRoleReducer = persistReducer(persistConfig, roleReducer);
export const store = configureStore({
  reducer: {
    role: persistedRoleReducer,
    login: loginUserSlice,
    verify: verifyReducer,
    postVolunterr: volinterLogin,
    loginPost: postLogin,
    registerInvestor: investorRegisterReducer ,
    getvolunterr: getVolunteerProfileReducer, 
    userMe: userMeGet,
    paymentPost: payments,
    userPut: userReducer,
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
import { useSelector } from 'react-redux';
import type {TypedUseSelectorHook } from 'react-redux';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
