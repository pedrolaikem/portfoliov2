import { useState } from 'react'
import './App.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Navbar from './components/navbar/menu'
import Introducao from './components/introducao/introducao'
import { Grid } from '@mui/joy';
function App() {
  return (
    <Grid container>
      <Grid xs={12}>
        <Navbar />
      </Grid>
      <Grid xs={12}>
        <Introducao />
      </Grid>
    </Grid>
  )
}

export default App
