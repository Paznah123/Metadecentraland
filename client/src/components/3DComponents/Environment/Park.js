import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function Park({ type, position, rotationX }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(`gltf/parks/${type}.glb`);
   
    return (           
        <group ref={group} position={position} dispose={null}>
            <group position={nodes.park.position} rotation={[-Math.PI / 2, 0, rotationX]} scale={nodes.park.scale.x * 10}>
                    { nodes.trees && (
                        <group position={nodes.trees.position} scale={nodes.trees.scale}>
                            {nodes.trees.children.map((tree, idx) => (
                                <group key={idx} position={tree.position} rotation={tree.rotation} scale={tree.scale}>
                                    <group position={nodes.leaves.position} scale={nodes.leaves.scale}>
                                        <mesh geometry={nodes.Torus.geometry} material={materials['Disco LIghts']} position={nodes.Torus.position} rotation={nodes.Torus.rotation} scale={nodes.Torus.scale} />
                                        <mesh geometry={nodes.Torus_1.geometry} material={materials['Disco LIghts']} position={nodes.Torus_1.position} rotation={nodes.Torus_1.rotation} scale={nodes.Torus_1.scale} />
                                        <mesh geometry={nodes.Torus_2.geometry} material={materials['Disco LIghts']} position={nodes.Torus_2.position} rotation={nodes.Torus_2.rotation} scale={nodes.Torus_2.scale} />
                                        <mesh geometry={nodes.Torus_3.geometry} material={materials['Disco LIghts']} position={nodes.Torus_3.position} rotation={nodes.Torus_3.rotation} scale={nodes.Torus_3.scale} />
                                    </group>
                                    <mesh geometry={nodes.stump.geometry} material={materials['Wood']} rotation={nodes.stump.rotation} scale={nodes.stump.scale} />
                                </group>
                            ))}
                        </group>
                    )}
                    { nodes.waters && (
                        <group position={nodes.waters.position} rotation={nodes.waters.rotation} scale={nodes.waters.scale}>
                            {nodes.waters.children.map((water, idx) => ( 
                                <mesh key={idx} geometry={water.geometry} material={materials.WMaterial} position={water.position} rotation={water.rotation} scale={water.scale} /> 
                            ))}
                        </group>
                    )}
                    <mesh geometry={nodes.land.geometry} material={materials.LMaterial} position={nodes.land.position} scale={nodes.land.scale}/>
            </group>
        </group>
    );
};

// ============================================================
