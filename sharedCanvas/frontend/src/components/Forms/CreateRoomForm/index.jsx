import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRoomForm = ({uuid, socket, setUser}) => {

    const [roomID, setRoomID] = useState(uuid())
    const [name, setName] = useState("")

    const navigate = useNavigate()

    const handleCreateRoom = (e) => {
        e.preventDefault()

        // {name, roomID, userID, , host, presenter}
        const roomData = {
            name: "User",
            roomID, 
            userID: uuid(),
            host: true,
            presenter: true
        }

        setUser(roomData)
        navigate(`/${roomID}`)
        socket.emit("userJoined", roomData)
        console.log(roomData)
    }

    return (
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    value={name}
                    placeholder="Enter your name" 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-group mt-2 d-flex align-items-center justify-content-center">
                <input 
                    type="text"
                    value={roomID}
                    disabled
                    className="form-control my-2 border-0"
                    placeholder="genrate code" 
                />
            </div>

                <div className="input-group-append mt-2 d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm"
                        onClick={() => setRoomID(uuid())}
                    >Generate new code</button>
                    <button className="btn btn-outline-danger btn-sm">Copy</button>
                </div>

            <button 
                type="submit" 
                className="btn mt-4 btn-primary btn-block form-control" 
                onClick={handleCreateRoom}
            >Generate Room</button>
        </form>
    )
}

export default CreateRoomForm;