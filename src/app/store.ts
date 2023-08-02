import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import activatedReducer from './activatedSlice';
import userReducer from './userSlice';

export const stores = configureStore({
    reducer: {
      counter: counterReducer,
      activated: activatedReducer,
      user: userReducer
    },
})
  
export type RootState = ReturnType<typeof stores.getState> 

export type AppDispatch = typeof stores.dispatch