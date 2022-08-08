import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// ============================================================

const Planet = ({ surface, position, rotationSpeed, size, color }) => {
    const ref = useRef();
    const [texture] = useLoader(TextureLoader, [surface]);

    useFrame(() => {
        ref.current.rotation.y += rotationSpeed;
    });

    return (
        <mesh ref={ref} position={position} >
            <pointLight castShadow intensity={2.5}/>
            <sphereBufferGeometry args={[size]}/>
            <meshPhongMaterial attach="material" emissive={color} map={texture}/>
        </mesh>
    );
};

// ============================================================

export default Planet;