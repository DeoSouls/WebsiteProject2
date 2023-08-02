import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store';
import axios from 'axios';

interface IUsers {
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    password: string,
    wmessage: string,
    dateofbirth: string,
    country: string,
    avatar: string,
    timezone: string,
    isActivate: boolean
}

export type UserSlice = {
    userData: IUsers,
    isLoading: boolean,
    error: Object
}

const initialState: UserSlice = {
    userData: {} as IUsers,
    isLoading: false,
    error: {}
} 

export const fetchUser = (email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.fetchUserLoading());
        const response = await axios.post("http://localhost:5000/profile/user", {
            email: email
        },{
            withCredentials: true
        });
        dispatch(userSlice.actions.fetchUserSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.fetchUserError('Failed to get user data'));
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserLoading(state) {
            state.isLoading = true;
        },
        fetchUserSuccess(state, action: PayloadAction<IUsers>) {
            state.isLoading = false;
            state.userData = action.payload;
        },
        fetchUserError(state, action: PayloadAction<Object>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default userSlice.reducer;