import { configureStore } from '@reduxjs/toolkit'
import PhotoReducer from '../features/photos/photoSlice'
import UserReducer from './userSlice'

export const store = configureStore({
  reducer: {
    photos: PhotoReducer,
    user: UserReducer,
  },
})