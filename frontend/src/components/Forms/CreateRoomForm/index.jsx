const CreateRoomForm = () => {
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
                    placeholder="genrate code" 
                />
            </div>

                <div className="input-group-append mt-2 d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm">Generate new code</button>
                    <button className="btn btn-outline-danger btn-sm">Copy</button>
                </div>

            <button type="submit" className="btn mt-4 btn-primary btn-block form-control">Generate Room</button>
        </form>
    )
}

export default CreateRoomForm;