import React, { useRef, useState } from "react";
import WhiteBoard from "../../components/Whiteboard";
import "./index.css"

const RoomPage = () => {

    const canvasRef = useRef(null)
    const ctxRef = useRef(null)

    const [tool, setTool] = useState("pencil")
    const [color, setColor] = useState("black")
    const [elements, setElements] = useState([])

    return (
        <div className="row">
            <h1 className="text-center">safehouse <span className="text-primary span">[Members: 0]</span></h1>
            <div className="col-md-12 mx-auto mt-2 mb-2 d-flex align-items-center justify-content-center">
          
                <div className="d-flex col-md-2 justify-content-center gap-1">          
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="line">Pencil</label>
                        <input 
                            type="radio" 
                            name="tool" 
                            id="pencil" 
                            checked={tool=="pencil"}
                            value="pencil" 
                            onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="line">Line</label>
                        <input 
                            type="radio" 
                            name="tool" 
                            id="line" 
                            checked={tool=="line"}
                            value="line" 
                            onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                </div>

                <div className="col-md-2 justify-content-center mx-auto">
                    <div className="d-flex flex-row align-items-center">
                        <label htmlFor="color">Select Color</label>
                        <input 
                            type="color" 
                            id="color" 
                            className="mt-1 ms-3"
                            value={color}
                            onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                </div>

                <div className="col-md-3 justify-content-center d-flex gap-2">
                    <button className="btn btn-primary mt-1">Undo</button>
                    <button className="btn btn-outline-primary mt-1">Redo</button>
                </div>

                <div className="col-md-3 justify-content-center d-flex gap-2">
                    <button className="btn btn-danger mt-1">Clear canvas</button>
                </div>
          
            </div>

            <div className="col-md-12 mt-3 canvas-box">
                <WhiteBoard 
                    canvasRef={canvasRef} 
                    ctxRef={ctxRef}
                    elements={elements}
                    setElements = {setElements} 
                />
            </div>
        </div>
    )
}

export default RoomPage;