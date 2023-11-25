import JoinRoomForm from './JoinRoomForm';
import CreateRoomForm from './CreateRoomForm';

import './index.css'

const Forms = ()=>{
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 p-5 form-box mx-auto d-flex flex-column align-items-center">
                <h1 className="text-primiary">Create Room</h1>

                <CreateRoomForm />
            </div>

            <div className="col-md-4 mt-5 p-5 form-box mx-auto d-flex flex-column align-items-center">
                <h1 className="text-primiary">Join Room</h1>

                <JoinRoomForm />
            </div>
        </div>
    )
};

export default Forms;