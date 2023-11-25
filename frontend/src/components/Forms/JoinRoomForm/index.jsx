const JoinRoomForm = () => {
    return (
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your name" 
                />
            </div>

            <div className="input-group mt-2 d-flex align-items-center justify-content-center">
                <input 
                    type="text"
                    className="form-control my-2 border-0"
                    placeholder="Enter room code" 
                />
            </div>

            <button type="submit" className="btn mt-5 btn-primary btn-block form-control">Join Room</button>
        </form>
    )
}

export default JoinRoomForm;