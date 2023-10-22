import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyDetailsActions } from '../features/compnyIdReducer'
import { AppState } from '../features/store'
import { useParams } from 'react-router-dom'
import companyReducer from '../features/compnyIdReducer'

export default function CompanyDetails() {
  const companyId = useParams()

  console.log(companyId, 'id')

  const url = `https://api.github.com/orgs/id ${companyId.id}`

  const dispatch = useDispatch()
  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        .then((response) => dispatch(companyDetailsActions.getCompanyDetailsSuccess(response.data)))
        .catch((error) => dispatch(companyDetailsActions.handleError(error.message)))
    }

    fetchData()
  }, [dispatch])

  const companyDetails = useSelector((state: AppState) => state.companyDetails.companyDetails)

  if (!companyDetails) {
    return <p> no data yet</p>
  }

  return (
    <div>
      companyDetails
      {companyDetails.titles}
    </div>
  )
}
