import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoomForm = ({uuid, socket, setUser}) => {

    const [roomID, setRoomId] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate()

    const handleRoomJoin = (e) => {
        e.preventDefault()

        const roomData = {
            name,
            roomID,
            userID: uuid(),
            host: false,
            presenter: false
        }

        setUser(roomData)
        navigate(`/${roomID}`)
        socket.emit("userJoined", roomData)
    }

    return (
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className=" form-group">
                <input 
                    type="text"
                    className="form-control border-0 mt-2"
                    placeholder="Enter room code" 
                    value={roomID}
                    onChange={(e) => setRoomId(e.target.value)}
                />
            </div>

            <button type="submit" onClick={handleRoomJoin} className="btn mt-4 btn-primary btn-block form-control">Join Room</button>

            {/* <button type="submit" className="btn mt-4 btn-primary btn-block form-control">Enter Playground</button> */}
        </form>
    )
}

export default JoinRoomForm;