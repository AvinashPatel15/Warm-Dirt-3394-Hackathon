import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Leaderboard from '../Pages/Leaderboard'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/leaderboard' element={<Leaderboard/>} />
    </Routes>
  )
}

export default Allroutes
