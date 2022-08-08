import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function Theatre({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
    const group = useRef();
    const { nodes, materials } = useGLTF('gltf/misc/theatre.glb');

    return (
        <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
        <group rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
            <mesh geometry={nodes.water.geometry} material={materials.Concrete} position={[686.35, -493.57, 22.81]} scale={[6, 6, 1]} />
            <mesh geometry={nodes.statue.geometry} material={materials['Distant Land 2']} position={[652.18, 410.07, 99.63]}>
                <meshStandardMaterial color={color} transparent opacity={1}/>
            </mesh>
            <mesh geometry={nodes.stage.geometry} material={materials['Simply Elegant 1']} position={[4.85, 0, 81.63]}>
                <meshStandardMaterial color={color} transparent opacity={1}/>
            </mesh>
            <mesh geometry={nodes.seats.geometry} material={materials['Ballerina 9']} position={[-706.25, 18.3, 0]}>
                <meshStandardMaterial color={color} transparent opacity={1}/>
            </mesh>
            <mesh geometry={nodes.land.geometry} material={materials.Bilbao} scale={[25, 20, 1]} />
        </group>
        </group>
    );
};

// ============================================================

useGLTF.preload('gltf/misc/theatre.glb');
