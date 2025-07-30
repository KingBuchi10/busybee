import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./Slices/modalSlice"
import userSlice from "./Slices/userSlice"

export const store = configureStore({
  reducer: {
    modals: modalSlice,
    user: userSlice,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch