import JoinRoomForm from './JoinRoomForm';
import CreateRoomForm from './CreateRoomForm';

import './index.css'

const Forms = ({ uuid, socket, setUser }) => {
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 p-5 form-box mx-auto d-flex flex-column align-items-center">
                <h2 className="text-primiary">Create Room</h2>

                <CreateRoomForm uuid={uuid} socket={socket} setUser={setUser} />
            </div>

            <div className="col-md-4 mt-5 p-5 form-box mx-auto d-flex flex-column align-items-center">
                <h2 className="text-primiary">Join Room</h2>

                <JoinRoomForm uuid={uuid} socket={socket} setUser={setUser} />
            </div>
        </div>
    )
};

export default Forms;