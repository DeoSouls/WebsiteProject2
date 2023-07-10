import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const stores = configureStore({
    reducer: {
      counter: counterReducer,
    },
})
  
export type RootState = ReturnType<typeof stores.getState> 

export type AppDispatch = typeof stores.dispatch