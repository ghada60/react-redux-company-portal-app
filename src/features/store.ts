import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counterSlice'

import companyReducer from './companyReducer'
import companyDetailsReducer from './compnyIdReducer'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    company: companyReducer,
    companyDetails: companyDetailsReducer,
  }
})

export type AppState = ReturnType<typeof store.getState>

export default store
