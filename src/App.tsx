import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
