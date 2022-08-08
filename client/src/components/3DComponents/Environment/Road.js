import React from 'react';

// ============================================================

const Road = ({ position, scale, rotation }) => {
    return ( 
        <mesh
            position={position} 
            scale={scale} 
            receiveShadow 
            castShadow
            rotation={rotation ? rotation: [0,0,0]}
        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color={'#807E78'} />
        </mesh>
    );
};

// ============================================================

export default Road;
