import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function Planetarium({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/planetarium.glb');
   
   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
            {ownerCrystal}
            <mesh geometry={nodes.Sphere_3.geometry} material={materials['Aragon 3']} position={[355.56, 309.29, 670.29]} rotation={[0, 0, -0.39]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.Sphere_2.geometry} material={materials['Aragon 2']} position={[302.45, 272.96, 591.25]} rotation={[0, 0, -0.39]} scale={3}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.Sphere_1.geometry} material={materials['Aragon 1']} position={[194.25, 181.69, 417.47]} scale={5}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.Sphere.geometry} material={materials.Aragon} scale={10}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.base.geometry} material={materials.Kentucky} position={[0, 0, 32.44]} scale={[12, 12, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.Sphere_4.geometry} material={materials['Aragon 4']} position={[403.29, 344.69, 748.88]} rotation={[0, 0, -0.39]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            <mesh geometry={nodes.land.geometry} material={materials['Early Glow']} position={[0, 0, 0.54]} scale={[21.5, 20, 0.5]} material-color={'#656565'} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/planetarium.glb');
