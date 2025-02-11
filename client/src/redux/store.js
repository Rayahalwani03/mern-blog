import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/useSlice'

export default configureStore({
  reducer: {
    user: userReducer,

  },
})