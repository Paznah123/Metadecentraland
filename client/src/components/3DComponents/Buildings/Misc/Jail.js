import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function Jail({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/jail.glb');

   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group position={[0.01, 0, -0.03]} rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
            {ownerCrystal}
            <group position={[-7.58, -36.26, 0]}>
               <mesh geometry={nodes.Box_3.geometry} material={materials['Secret Garden 2']} position={[1476.26, -5.72, 0]} scale={[0.5, 30, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_6.geometry} material={materials['Secret Garden 5']} position={[1001.21, -1481.26, 0]} scale={[10, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_5.geometry} material={materials['Secret Garden 4']} position={[-747.26, -1484.33, 0]} scale={[15, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_2.geometry} material={materials['Secret Garden 1']} position={[0.12, -1022.19, 0]} scale={[30, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_1.geometry} material={materials['Secret Garden']} position={[0.12, 1484.33, 0]} scale={[30, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_4.geometry} material={materials['Secret Garden 3']} position={[-1476.26, -6.72, 0]} scale={[0.5, 30, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <group position={[5.14, 192.34, 476.52]}>
               <group position={[1403.69, -1253.25, 0]}>
                  <mesh geometry={nodes.Box_15.geometry} material={materials['Piccolo 3']} scale={[0.5, 0.5, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Box_16.geometry} material={materials['Pluto 3']} position={[0, 0, 382.64]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[-1403.69, -1253.25, 0]}>
                  <mesh geometry={nodes.Box_15_1.geometry} material={materials['Piccolo 2']} scale={[0.5, 0.5, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Box_16_1.geometry} material={materials['Pluto 2']} position={[0, 0, 382.64]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[-1403.69, 1253.25, 0]}>
                  <mesh geometry={nodes.Box_15_2.geometry} material={materials['Piccolo 4']} scale={[0.5, 0.5, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Box_16_2.geometry} material={materials['Pluto 4']} position={[0, 0, 382.64]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[55.72, 1253.25, 0]}>
                  <mesh geometry={nodes.Box_15_3.geometry} material={materials['Piccolo 1']} scale={[0.5, 0.5, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Box_16_3.geometry} material={materials['Pluto 1']} position={[0, 0, 382.64]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[1403.69, 1253.25, 0]}>
                  <mesh geometry={nodes.Box_15_4.geometry} material={materials.Piccolo} scale={[0.5, 0.5, 4]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Box_16_4.geometry} material={materials.Pluto} position={[0, 0, 382.64]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
            </group>
            <group position={[-14.18, 427.15, 0]}>
               <mesh geometry={nodes.Box_14.geometry} material={materials['Early Glow 8']} position={[-1087.73, -575.73, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_13.geometry} material={materials['Early Glow 7']} position={[-1087.73, -7.22, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_12.geometry} material={materials['Early Glow 6']} position={[-1087.73, 574.74, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_11.geometry} material={materials['Early Glow 5']} position={[512.33, 574.74, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_10.geometry} material={materials['Early Glow 4']} position={[512.33, -7.22, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_9.geometry} material={materials['Early Glow 3']} position={[512.33, -574.74, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_8.geometry} material={materials['Early Glow 2']} position={[1087.73, -574.74, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_7.geometry} material={materials['Early Glow 1']} position={[1087.73, -7.22, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box.geometry} material={materials['Early Glow']} position={[1087.73, 574.74, 0]} scale={[5, 5, 2]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <mesh geometry={nodes.land.geometry} material={materials.Wellington} position={[-7.46, -31.88, 0]} scale={[30, 30, 0.1]} material-color={'#656565'} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/jail.glb');
