import { useEffect, useState, useLayoutEffect } from "react";
import rough from "roughjs"

const roughGenerator = rough.generator()

const WhiteBoard = ({ canvasRef, ctxRef, elements, setElements, tool, color, user }) => {

    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lneCap = "round"

        canvas.height = window.innerHeight
        canvas.width = window.innerWidth

        ctxRef.current = ctx

    }, [])

    useEffect(() => {

    })

    useEffect(() => {
        ctxRef.current.strokeStyle = color;

    }, [color])

    useLayoutEffect(() => {
        const roughCanvas = rough.canvas(canvasRef.current)

        if (elements.length > 0) {
            ctxRef.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.width)
        }

        elements.forEach((element) => {

            if (element.type === "pencil") {
                roughCanvas.linearPath(
                    element.path,
                    {
                        stroke: element.stroke,
                        strokeWidth: 2,
                        roughness: 0
                    }
                );
            } else if (element.type === "line") {
                roughCanvas.draw(
                    roughGenerator.line(
                        element.offsetX,
                        element.offsetY,
                        element.width,
                        element.height,
                        {
                            stroke: element.stroke,
                            strokeWidth: 2,
                            roughness: 0
                        }
                    )
                )
            } else if (element.type === "rect") {
                roughCanvas.draw(
                    roughGenerator.rectangle(
                        element.offsetX,
                        element.offsetY,
                        element.width,
                        element.height,
                        {
                            stroke: element.stroke,
                            strokeWidth: 2,
                            roughness: 0
                        }
                    )
                )
            }
        });

    }, [elements])

    const handleMouseDown = (e) => {
        const { offsetX, offsetY } = e.nativeEvent

        if (tool === "pencil") {
            setElements((prevElements) => [
                ...prevElements,
                {
                    type: "pencil",
                    offsetX,
                    offsetY,
                    path: [[offsetX, offsetY]],
                    stroke: color
                },
            ])
        } else if (tool === "line") {
            setElements((prevElements) => [
                ...prevElements,
                {
                    type: "line",
                    offsetX,
                    offsetY,
                    width: offsetX,
                    height: offsetY,
                    stroke: color
                },
            ])
        } else if (tool === "rect") {
            setElements((prevElements) => [
                ...prevElements,
                {
                    type: "rect",
                    offsetX,
                    offsetY,
                    width: 0,
                    height: 0,
                    stroke: color
                },
            ])
        } else if (tool === "circle") {

        }

        setIsDrawing(true)
    }

    const handleMouseMove = (e) => {
        const { offsetX, offsetY } = e.nativeEvent
        if (isDrawing) {

            if (tool === "pencil") {
                //Pencil by default as static
                const { path } = elements[elements.length - 1]
                const newPath = [...path, [offsetX, offsetY]]

                setElements((prevElements) =>
                    prevElements.map((ele, index) => {
                        if (index === elements.length - 1) {
                            return {
                                ...ele,
                                path: newPath
                            }
                        } else {
                            return ele
                        }
                    }))
            } else if (tool === "line") {
                setElements((prevElements) =>
                    prevElements.map((ele, index) => {
                        if (index === elements.length - 1) {
                            return {
                                ...ele,
                                width: offsetX,
                                height: offsetY,
                            }
                        } else {
                            return ele
                        }
                    }))
            } else if (tool === "rect") {
                setElements((prevElements) =>
                    prevElements.map((ele, index) => {
                        if (index === elements.length - 1) {
                            return {
                                ...ele,
                                width: offsetX - ele.offsetX,
                                height: offsetY - ele.offsetY,
                            }
                        } else {
                            return ele
                        }
                    }))
            }

            // console.log("Cursor at position ", offsetX, offsetY)
        }
    }

    const handleMouseUp = (e) => {
        setIsDrawing(false)
    }

    // if (user?.presenter) {
    //     return (
    //         <div className="border border-dark border-3 h-100 w-100 overflow-hidden">
    //             <img src="" alt="Real time whiteboard Image" className="w-100 h-100" />
    //         </div>

    //     )
    // }


    return (

        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="border border-dark border-3 h-100 w-100 overflow-hidden">
            <canvas ref={canvasRef} />
        </div>

    )

}

export default WhiteBoard;