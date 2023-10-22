import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyType } from '../Types/Types'
import CompanyDetails from '../components/CompanyDetails'

type InitialState = {
  companyDetails: null | CompanyType
  loading: boolean
  error: null
}
const initialState: InitialState = {
  companyDetails: null,
  loading: true,
  error: null
}
const companyDetailsSlice = createSlice({
  name: 'companyDetails',
  initialState,
  reducers: {
    getCompanyDetailsSuccess: (state, action : PayloadAction<CompanyType >) => {
      state.companyDetails = action.payload
      state.loading = false;
    },
    handleError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});
const companyDetailsReducer = companyDetailsSlice.reducer
export default companyDetailsReducer
export const companyDetailsActions = companyDetailsSlice.actions
