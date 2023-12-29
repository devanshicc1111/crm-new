import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from './features/authSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: true
})

setupListeners(store.dispatch)
