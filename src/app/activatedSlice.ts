import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store';
import axios from 'axios';

interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    number: string | null;
    isActivate: boolean
}

export type UserSlice = {
    userData: IUser,
    isLoading: boolean,
    error: Object
}

const initialState: UserSlice = {
    userData: {} as IUser,
    isLoading: false,
    error: {}
} 

export const fetchActivated = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(activatedSlice.actions.fetchUserActivatedLoading());
        const response = await axios.get("http://localhost:5000/profile/refresh", {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            withCredentials: true
        });
        dispatch(activatedSlice.actions.fetchUserActivatedSuccess(response.data))
    } catch (e) {
        dispatch(activatedSlice.actions.fetchUserActivatedError('Failed to get user data'));
    }
};

export const activatedSlice = createSlice({
    name: 'activated',
    initialState,
    reducers: {
        fetchUserActivatedLoading(state) {
            state.isLoading = true;
        },
        fetchUserActivatedSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.userData = action.payload;
        },
        fetchUserActivatedError(state, action: PayloadAction<Object>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default activatedSlice.reducer;