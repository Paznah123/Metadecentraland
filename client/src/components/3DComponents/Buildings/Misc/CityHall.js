import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import Tree from '../../Environment/Tree';

// ============================================================

export default function CityHall({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
    const group = useRef();
    const { nodes, materials } = useGLTF('gltf/misc/city_hall.glb');
    
    return (
        <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
            <group position={[-0.02, 0, 0.02]} rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
                {ownerCrystal}
                <group position={[15.89, 477.48, 0]}>
                    <mesh geometry={nodes.Sphere_8.geometry} material={materials['Berlin 8']} position={[300.51, 316.09, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_7.geometry} material={materials['Berlin 7']} position={[-299.49, 316.09, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_6.geometry} material={materials['Berlin 6']} position={[0.51, 316.09, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_5.geometry} material={materials['Berlin 5']} position={[-603.79, 316.09, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_3.geometry} material={materials['Berlin 3']} position={[622.45, 316.09, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_4.geometry} material={materials['Berlin 4']} position={[-603.79, 17.7, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_2.geometry} material={materials['Berlin 2']} position={[622.45, 17.7, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere_1.geometry} material={materials['Berlin 1']} position={[622.45, -272.77, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Sphere.geometry} material={materials.Berlin} position={[-603.8, -272.77, 224.34]} scale={[2, 2, 1.5]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Box_2.geometry} material={materials['Kathmandu 1']} position={[-606.63, -1.12, 0]} scale={[4, 6, 3]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Box_1.geometry} material={materials.Kathmandu} position={[0.51, 311.12, 0]} scale={[16, 2, 3]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh geometry={nodes.Box_3.geometry} material={materials['Kathmandu 2']} position={[606.63, -1.12, 0]} scale={[4, 6, 3]}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                </group>
                <group>
                    <group position={[-32.43, 304.34, 0]}>
                        <Tree position={[-700, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-500, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-300, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-150, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-750.2, -780, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-750.2, -1000, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[-750.2, -1200, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                    </group>
                </group>
                <group>
                    <group position={[-32.43, 304.34, 0]}>
                        <Tree position={[900, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[700, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[500, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[310, -580, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[920, -780, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[920, -1000, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                        <Tree position={[920, -1200, 100]} rotation={[Math.PI / 2, Math.PI, 0]} scale={100} />
                    </group>
                </group>
                
                <group position={[15.89, 207.34, 51.22]}>
                    <mesh geometry={nodes.pilar.geometry} material={materials['Godzilla 2']} position={[0, 0, 2]} scale={[1, 1, 4]} />
                    <mesh geometry={nodes.base.geometry} material={materials.Godzilla} scale={[4, 4, 0.1]} />
                    <mesh geometry={nodes.head.geometry} material={materials['Butterfly Garden']} position={[0, 0, 229.91]} scale={4} />
                </group>
                <mesh geometry={nodes.left_water.geometry} material={materials['Stripes 1']} position={[-432.57, -605.01, 13.91]} scale={[6, 6, 0.5]} />
                <mesh geometry={nodes.land.geometry} material={materials.Galaxy} position={[16.39, 21.43, 0]} scale={[19, 20, 0.5]} material-color={'#656565'} />
                <mesh geometry={nodes.base_1.geometry} material={materials['Godzilla 1']} position={[15.89, 207.34, 51.22]} scale={[4, 4, 0.1]} />
                <mesh geometry={nodes.right_water.geometry} material={materials.Stripes} position={[523.52, -605.01, 13.91]} scale={[6, 6, 0.5]} />
            </group>
        </group>
    );
};

// ============================================================

useGLTF.preload('gltf/misc/city_hall.glb');
