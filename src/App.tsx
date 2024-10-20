import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { findFlagUrlByNationality } from "country-flags-svg";
import Navbar from './components/navbar/menu'

const Brazil = findFlagUrlByNationality("Brazilian")
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
