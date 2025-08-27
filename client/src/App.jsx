import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HOME from './pages/HOME.JSX'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
