import React from 'react';

// ============================================================

const Crystal = ({ position, scale, rotationX, color }) => {   
    const posTop = rotationX ? [position[0], position[1], position[2]  + scale[1]] : position;
    const posBottom = rotationX ? position : [position[0], position[1] + scale[1], position[2]];

    return (
        <group>
            <mesh
                position={posTop} 
                scale={scale}
                receiveShadow 
                castShadow
                rotation={[rotationX || -Math.PI, 0, 0]}
            >
                <coneBufferGeometry attach="geometry"/>
                <meshLambertMaterial attach="material" color={color} />
            </mesh>
            <mesh 
                position={posBottom} 
                scale={scale}
                receiveShadow 
                castShadow
                rotation={[rotationX || -Math.PI, 0, Math.PI]}
            >
                <coneBufferGeometry attach="geometry"/>
                <meshLambertMaterial attach="material" color={color} />
            </mesh>
        </group>
    );
};

// ============================================================

export default Crystal;