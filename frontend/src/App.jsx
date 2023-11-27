import Forms from './components/Forms'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RoomPage from './pages/RoomPage'

import io from "socket.io-client"
import { useEffect, useState } from 'react'

const server = "http://localhost:5173"
const connectionOptions = {
  "force new connections": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
}

const socket = io(server, connectionOptions)

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    socket.on("userIsJoined", (data) => { 
      if(data.sucess){
        console.log("userJoined")
      }else{
        console.log("userJoined Error")
      }
    })
  }, [])

  const uuid = () => {
    let s4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
  
    return (
      s4() +
      s4() +
      "-"  +
      s4() +
      "-"  +
      s4()
    );
  };
  

  return (
    <div className="container">      
      <Routes>
        <Route path='/' element={<Forms uuid={uuid} socket={socket} setUser={setUser} />}></Route>
        <Route path='/:roomID' element={<RoomPage user={user} />}></Route>
      </Routes>

    </div>
  )
}

export default App
