import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { companyAction } from '../features/companyReducer'
import { useSelector } from 'react-redux'
import { AppState } from '../features/store'

export default function Company() {
  const url = 'https://api.github.com/organizations'
  const dispatch = useDispatch()
  const companies = useSelector((state: AppState) => state.company.companyList)
  const companyLoading = useSelector((state: AppState) => state.company.loading)
  const error = useSelector((state: AppState) => state.company.error)

  console.log(companies, 'companies')
  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        // access to data
        // action.payload
        .then((response) => dispatch(companyAction.getData(response.data)))
        .catch((error) => dispatch(companyAction.getError(error.message)))
        // .catch((error) => console.log(error,'error'))

    }

    fetchData()
  }, [])
  if (error) {
    return <div> {error}</div>
  }
  if (companyLoading === true) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    )
  }
  return (
    <div>
      Company
      {companies.map((company) => (
        <div>
          <h3>{company.id}</h3>
          <img src={company.avatar_url} />
        </div>
      ))}
    </div>
  )
}