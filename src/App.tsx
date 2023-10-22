// import { decrement, increment } from './features/'
import { AppState } from './features/store'
import './App.css'
import Company from './components/Company'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Route, Routes } from 'react-router-dom'
import CompanyDetails from './components/CompanyDetails'
function App() {
  // const count = useSelector((state: AppState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Vite + React + Toolkit + MUI</h1>
      {/* <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
            <Button variant="contained" onClick={() => dispatch(increment())}> */}
      {/* Increment
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography>{count}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
          </Grid>
        </Grid>
      </Box> */}
      <h1>company</h1>
      <Company />
      <CompanyDetails />

      <Routes>
        <Route path="/" element={<Company />}></Route>
        <Route path="/:copanyId" element={<CompanyDetails />} />
      </Routes>
    </div>
  )
}
