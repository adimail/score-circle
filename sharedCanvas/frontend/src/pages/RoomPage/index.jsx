import React, { useRef, useState } from "react";
import WhiteBoard from "../../components/Whiteboard";
import "./index.css"

const RoomPage = ({ user }) => {

    const canvasRef = useRef(null)
    const ctxRef = useRef(null)

    const [tool, setTool] = useState("pencil")
    const [color, setColor] = useState("black")
    const [elements, setElements] = useState([])
    const [history, setHistory] = useState([])

    const handleClearCanvas = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.fillRect = "white"
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        setElements([])
    }

    const undo = () => {
        setHistory((prevHistory) => [...prevHistory, elements[elements.length - 1]])
        setElements(
            (prevElements) => prevElements.slice(0, prevElements.length - 1)
        )
    }

    const Redo = () => {
        setElements(
            (prevElements) => [
                ...prevElements,
                history[history.length - 1]
            ]
        )
        setHistory((prevHistory) => [...prevHistory, elements[prevHistory.length - 1]])
    }

    return (
        <div className="row">
            <h1 className="text-center">Safehouse <span className="text-primary span">[Members: 0]</span></h1>

            {
                user?.presenter && (
                    <div className="col-md-12 mx-auto mt-2 mb-2 d-flex align-items-center justify-content-center">


                        <div className="d-flex col-md-2 justify-content-center gap-1">
                            <div className="d-flex gap-1 align-items-center">
                                <label htmlFor="line">Pencil</label>
                                <input
                                    type="radio"
                                    name="tool"
                                    id="pencil"
                                    checked={tool == "pencil"}
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
                                    checked={tool == "line"}
                                    value="line"
                                    onChange={(e) => setTool(e.target.value)}
                                />
                            </div>

                            <div className="d-flex gap-1 align-items-center">
                                <label htmlFor="rect">Rectangle</label>
                                <input
                                    type="radio"
                                    name="tool"
                                    id="rect"
                                    checked={tool == "rect"}
                                    value="rect"
                                    onChange={(e) => setTool(e.target.value)}
                                />
                            </div>

                            <div className="d-flex gap-1 align-items-center">
                                <label htmlFor="circle">Circle</label>
                                <input
                                    type="radio"
                                    name="tool"
                                    id="circle"
                                    checked={tool == "circle"}
                                    value="circle"
                                    onChange={(e) => setTool(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-2 mx-auto">
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="color">Select Color</label>
                                <input
                                    type="color"
                                    id="color"
                                    className="mt-1 ms-3"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-3 justify-content-center d-flex gap-2">
                            <button className="btn btn-primary mt-1"
                                disabled={elements.length === 0}
                                onClick={() => undo()}
                            >Undo</button>
                            <button className="btn btn-outline-primary mt-1"
                                disabled={history.length < 1}
                                onClick={() => Redo()}
                            >Redo</button>
                        </div>

                        <div className="col-md-3 justify-content-center d-flex gap-2">
                            <button className="btn btn-danger mt-1" onClick={handleClearCanvas}>Clear canvas</button>
                        </div>

                    </div>
                )
            }

            <div className="col-md-12 mt-3 canvas-box">
                <WhiteBoard
                    canvasRef={canvasRef}
                    ctxRef={ctxRef}
                    elements={elements}
                    setElements={setElements}
                    color={color}
                    tool={tool}
                    user = {user}
                />
            </div>
        </div>
    )
}

export default RoomPage;