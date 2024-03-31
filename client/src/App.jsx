import React from 'react'
import Cards from './components/Cards'
import UserFilters from './components/UserFilters'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <UserFilters/>
      <Cards/>
    </div>
  )
}

export default App