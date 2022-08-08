import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function School({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/school.glb');

   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group position={[0, 0, -0.08]} rotation={[-Math.PI / 2, 0, rotationX]} scale={0.015}>
            {ownerCrystal}
            <mesh geometry={nodes.Box.geometry} material={materials.Malibu} position={[442.88, 645.25, 0]} scale={4}>
					<meshStandardMaterial color={color} transparent opacity={1}/>
				</mesh>
            <mesh geometry={nodes.grass.geometry} material={materials.Valencia} position={[346.65, -647.98, 11.28]} scale={[6, 8, 0.1]} />
            <mesh geometry={nodes.entrance.geometry} material={materials['Phoenix 1']} position={[-38.22, -7.36, 0]} scale={[0.75, 0.73, 1]}>
					<meshStandardMaterial color={color} transparent opacity={1}/>
				</mesh>
            <mesh geometry={nodes.building.geometry} material={materials['Andorra 1']} position={[-235.19, 172.15, 0]} scale={[0.75, 0.73, 1]}>
					<meshStandardMaterial color={color} transparent opacity={1}/>
				</mesh>
            <mesh geometry={nodes.land.geometry} material={materials.Mars} position={[0, -78.72, 0]} scale={[15, 22, 0.1]} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/school.glb');
