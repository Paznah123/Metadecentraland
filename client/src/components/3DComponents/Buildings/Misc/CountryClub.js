import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import Tree from '../../Environment/Tree';

// ============================================================

export default function CountryClub({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/country_club.glb');
   
   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group rotation={[-Math.PI / 2, 0, rotationX]} scale={[0.011,0.01,0.01]}>
            {ownerCrystal}
            <group position={[-992.94, 500.88, 98.69]} scale={1}>
               <Tree position={[8.91, -154.05, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
               <Tree position={[8.91, 9.81, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
               <Tree position={[8.91, 171.37, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
               <Tree position={[8.91, 320.92, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
            </group>
            <group position={[710.25, -330.61, 99.89]}>
               <group position={[-1.95, 1.49, 7.86]}>
                  <mesh geometry={nodes.Box_2.geometry} material={materials['Cupcake 2']} position={[295.83, -1.49, 0.66]} scale={[0.1, 10, 0.1]} />
                  <mesh geometry={nodes.Box_8.geometry} material={materials['Cupcake 4']} position={[1.7, -1.49, 0.66]} scale={[0.1, 6, 0.1]} />
                  <mesh geometry={nodes.Box_1.geometry} material={materials['Cupcake 1']} position={[205.2, -1.49, 0.66]} scale={[0.1, 10, 0.1]} />
                  <mesh geometry={nodes.Box.geometry} material={materials.Cupcake} position={[-204.06, -1.49, 0.66]} scale={[0.1, 10, 0.1]} />
                  <mesh geometry={nodes.Box_7.geometry} material={materials['Rowan 4']} position={[0.95, 302.68, 0]} scale={[4, 0.1, 0.1]} />
                  <mesh geometry={nodes.Box_6.geometry} material={materials['Rowan 3']} position={[0.95, -305.92, 0]} scale={[4, 0.1, 0.1]} />
                  <mesh geometry={nodes.Box_5.geometry} material={materials['Rowan 2']} position={[0.95, -495.29, 0]} scale={[6, 0.1, 0.1]} />
                  <mesh geometry={nodes.Box_4.geometry} material={materials['Rowan 1']} position={[0.95, 496.49, 0]} scale={[6, 0.1, 0.1]} />
                  <mesh geometry={nodes.Box_3.geometry} material={materials['Cupcake 3']} position={[-295.95, -1.49, 0.66]} scale={[0.1, 10, 0.1]} />
               </group>
               <mesh geometry={nodes.net.geometry} material={materials.Rowan} position={[-1, 9.84, 0]} scale={[6, 0.1, 0.5]} />
               <mesh geometry={nodes.court_base.geometry} material={materials['Happy Days']} scale={[8, 12, 0.1]} />
               <mesh geometry={nodes.court.geometry} material={materials['Butterfly Bush']} position={[-1.42, 2.58, 6.46]} scale={[6, 10, 0.1]} />
            </group>
            <group position={[-450.03, -310.17, 3.67]}>
               <mesh geometry={nodes.Sphere_3.geometry} material={materials['Brimstone 3']} position={[434.42, -2.85, 43.3]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_2.geometry} material={materials['Brimstone 2']} position={[-34.42, 418.95, 43.3]} scale={2}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere.geometry} material={materials.Brimstone} position={[-34.42, -18.95, 91.04]} scale={3}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Sphere_1.geometry} material={materials['Brimstone 1']} position={[-34.42, -18.95, 0]} scale={[10, 10, 3]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <mesh geometry={nodes.water.geometry} material={materials.Stripes} position={[115.76, 578.56, 100.46]} scale={[20, 5, 0.1]} />
            <mesh geometry={nodes.land.geometry} material={materials.Bilbao} scale={[25, 20, 1]} material-color={'#656565'} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/country_club.glb');
