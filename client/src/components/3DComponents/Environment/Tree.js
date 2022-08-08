import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// ============================================================

export default function Tree({ position, rotation, rotationX, scale }) {
    const group = useRef();
    const { nodes, materials } = useGLTF('gltf/tree.glb');

    return (
        <group ref={group} position={position} rotation={rotation || [Math.PI / 2, rotationX, 0]} scale={scale} dispose={null}>
            <group position={[-0.07, -0.3, 0]}>
                <group position={[0, -0.5, -0.07]} scale={0.75}>
                <mesh geometry={nodes.Torus_2.geometry} material={materials['Disco LIghts 3']} position={[0.01, 2, 0.06]} rotation={[-1.51, 0.3, -1.45]} scale={0.02} />
                <mesh geometry={nodes.Torus_3.geometry} material={materials['Disco LIghts 2']} position={[-0.01,2, 0.06]} rotation={[-1.52, -0.57, -1.51]} scale={0.02} />
                <mesh geometry={nodes.Torus_1.geometry} material={materials['Disco LIghts']} position={[0.01, 2, 0.06]} rotation={[-Math.PI / 2, 0.6, 0]} scale={0.02} />
                <mesh geometry={nodes.Torus.geometry} material={materials['Disco LIghts 1']} position={[-0.01, 2, 0.06]} rotation={[-Math.PI/2, 0.75, 0.5]} scale={0.02} />
                </group>
                <mesh geometry={nodes.stump.geometry} position={[0, -0.75, -0.07]} material={materials.Wood} rotation={[-Math.PI / 2, 0, 0]} scale={[0.005, 0.005, 0.02]} />
            </group>
        </group>
    );
};

// ============================================================

useGLTF.preload('gltf/tree.glb');
