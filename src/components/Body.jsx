import React from 'react';

export default function Body(){
    return (
        <div className='body'>
            <model-viewer style={{ width: "100vw", height: "100vh" }} id="reveal" loading="eager" camera-controls touch-action="pan-y" auto-rotate src="Sala.glb" shadow-intensity="1" alt="A 3D model of table set" ar></model-viewer>
        </div>
    )
}