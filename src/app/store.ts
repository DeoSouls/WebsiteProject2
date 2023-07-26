import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import activatedReducer from './activatedSlice';

export const stores = configureStore({
    reducer: {
      counter: counterReducer,
      activated: activatedReducer
    },
})
  
export type RootState = ReturnType<typeof stores.getState> 

export type AppDispatch = typeof stores.dispatch