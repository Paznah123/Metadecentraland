import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function Market({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/market.glb');

   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
            {ownerCrystal}
            <group position={[740.32, 355.15, 0]}>
               <mesh geometry={nodes.Sphere_9.geometry} material={materials['Refresh 8']} position={[29.82, -22.87, 679.93]} scale={3}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_5.geometry} material={materials['Refresh 4']} position={[29.82, -22.87, 606.72]} scale={[4, 4, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_8.geometry} material={materials['Refresh 7']} position={[29.82, -24.71, 125.7]} scale={[4, 5, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_7.geometry} material={materials['Refresh 6']} position={[29.82, -24.71, 214.48]} scale={[4, 5, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_6.geometry} material={materials['Refresh 5']} position={[29.82, -24.71, 318.04]} scale={[4, 5, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_4.geometry} material={materials['Refresh 3']} position={[29.82, -24.71, 436.13]} scale={[4, 5, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Cylinder.geometry} material={materials['Evil Eye']} position={[26.92, -14, 36.37]} scale={[3, 3, 7]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere.geometry} material={materials['Distant Land']} scale={[7, 7, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Polyhedron.geometry} material={materials.Pluto} position={[27.58, -21.09, 926.87]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <group position={[-134.46, -9.78, 36.37]}>
               <mesh geometry={nodes.booth_9.geometry} material={materials['Hidden Place 9']} position={[1013.18, -847.53, 0]} scale={[6, 4, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_8.geometry} material={materials['Hidden Place 8']} position={[326.41, -847.53, 0]} scale={[6, 4, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_7.geometry} material={materials['Hidden Place 7']} position={[-341.5, -847.53, 0]} scale={[6, 4, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_6.geometry} material={materials['Hidden Place 6']} position={[-1013.18, -847.53, 0]} scale={[6, 4, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_1.geometry} material={materials['Hidden Place 1']} position={[-1101.69, 43.57, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_5.geometry} material={materials['Hidden Place 5']} position={[-79.54, 43.57, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_3.geometry} material={materials['Hidden Place 3']} position={[-592.03, 43.57, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_4.geometry} material={materials['Hidden Place 4']} position={[-79.54, 747.53, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth.geometry} material={materials['Hidden Place']} position={[-1101.69, 747.53, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.booth_2.geometry} material={materials['Hidden Place 2']} position={[-592.03, 747.53, 0]} scale={[4, 6, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <mesh geometry={nodes.land.geometry} material={materials.Panorama} position={[0, 0, 36.37]} scale={[33, 24, 0.1]} material-color={'#656565'} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/market.glb');
