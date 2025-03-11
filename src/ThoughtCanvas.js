import React, { useRef, useEffect } from "react";

const Canvas = props => {
    // Instatiating the canvas
    const canvasRef = useRef(null);

    useEffect(() => {
        // Setup
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Sizing
        canvas.width = window.screen.width/3;
        canvas.height = window.screen.height/2;

        // DrawFnc
        const draw = (ctx, width, height) => {
            ctx.clearRect(0, 0, width, height); // Clear the canvas

            // Example drawing with scaling considerations
            ctx.strokeStyle = '#3D8D7A';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(width / 2, height / 2);
            ctx.stroke();
        };

        // Initial draw
        draw(ctx, canvas.width, canvas.height);

        // Redraw on window resize
        const handleResize = () => {
            canvas.width = window.screen.width / 3;
            canvas.height = window.screen.height / 2;
            draw(ctx, canvas.width, canvas.height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    return <canvas ref={canvasRef} {...props} />;
}

// export const Thought = () => {
//     return (
//        <canvas></canvas>  
//     );
// }

export default Canvas;