import { createSlice } from '@reduxjs/toolkit';

 export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLogging: false,
    },
    reducers: {
        setUser: (state, action ) => {
            state.isLogging = true;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;