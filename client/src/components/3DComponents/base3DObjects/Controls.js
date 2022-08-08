import React, { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import { MathUtils } from 'three';

extend({ MapControls });

// ============================================================

const maxDistance = 150;

const Controls = () => {
    const controls = useRef();

    useFrame((delta) => {
        const { target } = controls.current;

        target.x = MathUtils.clamp(target.x, -maxDistance, maxDistance)
        target.z = MathUtils.clamp(target.z, -maxDistance, maxDistance)
        
        controls.current.update(delta);
    });

    return (
        <MapControls  
            ref={controls}
            panSpeed={2}
            zoomSpeed={3} 
            minDistance={20}
            maxDistance={130}
            dampingFactor={0.8}
            autoRotateSpeed={2}
            minPolarAngle={-Math.PI/2}
            maxPolarAngle={Math.PI/2 - 0.25}
            screenSpacePanning={false} 
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
        />
    );
};

// ============================================================

export default Controls;