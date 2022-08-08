import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// ============================================================

export default function Mall({ type, position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
    const group = useRef();
    const sign = useRef();

    const { nodes, materials } = useGLTF(`gltf/malls/${type}.glb`);

    useFrame(() => { 
        sign.current.rotation.z += 0.01;
    });

    return (
        <group ref={group} position={position} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut} dispose={null}>
            {ownerCrystal}
            <group position={nodes.mall.position} rotation={[-Math.PI / 2, 0, rotationX]} scale={nodes.mall.scale.x * 10}>
                { nodes.trees && (
                    <group position={nodes.trees.position} rotation={nodes.trees.rotation}>
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
                <group position={nodes.sign.position}>
                    <mesh geometry={nodes.pillar.geometry} material={materials.PMaterial} position={nodes.pillar.position} scale={nodes.pillar.scale}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                    <mesh ref={sign} geometry={nodes.sign_1.geometry} material={materials.SMaterial} position={nodes.sign_1.position} scale={nodes.sign_1.scale}>
                        <meshStandardMaterial color={color} transparent opacity={1}/>
                    </mesh>
                </group>
                <mesh geometry={nodes.house.geometry} material={materials.HMaterial} position={nodes.house.position} scale={nodes.house.scale}>
                    <meshStandardMaterial color={color} transparent opacity={1}/>
                </mesh>
                <mesh geometry={nodes.land.geometry} material={materials.LMaterial} material-color={'#656565'} position={nodes.land.position} scale={nodes.land.scale} />
            </group>
        </group>
    );
};

// ============================================================
