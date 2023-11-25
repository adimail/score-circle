import Forms from './components/Forms'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RoomPage from './pages/RoomPage'

const App = () => {
  return (
    <div className="container">      
      <Routes>
        <Route path='/' element={<Forms />}></Route>
        <Route path='/:roomID' element={<RoomPage />}></Route>
      </Routes>

    </div>
  )
}

export default App
