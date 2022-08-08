import React, { useRef, useEffect, useState } from 'react';
import { Instances, Instance, useGLTF, useCursor } from '@react-three/drei';
import { Color } from 'three';

// ============================================================

function Building({ position, rotationX, color, onDoubleClick, ownerCrystal }) {
    const ref = useRef();
    const [hovered, setHovered] = useState(false)

    useCursor(hovered, 'pointer', 'auto');

    useEffect(() => {
        ref.current.color = new Color(color)
    });
    
    return (
        <group onDoubleClick={onDoubleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            {ownerCrystal}
            <Instance position={position} ref={ref} scale={0.01} rotation={[-Math.PI / 2, 0, rotationX]}/>
        </group>
    );
};

// ============================================================

const Buildings = ({ lands, createProps, modelName }) => {
    const folder = modelName.includes('sky') ? 'skyscrapers' : 'houses';

    const { nodes, materials } = useGLTF(`gltf/${folder}/${modelName}.glb`);

    const buildings = lands.filter(land => land.type === modelName);
    
    return (
        <Instances range={buildings.length} material={materials['Material']} geometry={nodes.Merged_Objects.geometry}>
            {buildings.map((land, idx) => {
                return <Building {...createProps(land, idx)} />
            })}
        </Instances>
    );
};

// ============================================================

export default Buildings;