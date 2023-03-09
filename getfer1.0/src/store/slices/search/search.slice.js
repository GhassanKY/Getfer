import { createSlice } from '@reduxjs/toolkit';

 export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchFilter: '',
    },
    reducers: {
        setsearchfilter: (state, action) => {
            state.searchFilter = action.payload;
        },
    }
});



export const { setsearchfilter } = searchSlice.actions;
export default searchSlice.reducer;