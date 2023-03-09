import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userS/user.slice'
import searchSlice from './slices/search/search.slice'

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    search: searchSlice,
	}
})