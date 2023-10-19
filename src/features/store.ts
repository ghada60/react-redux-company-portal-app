import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counterSlice'

import companyReducer from './companyReducer'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    company: companyReducer
  }
})

export type AppState = ReturnType<typeof store.getState>

export default store
