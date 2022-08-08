import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// ============================================================

export default function SoccerField({ position, rotationX, color, onDoubleClick, onPointerOver, onPointerOut, ownerCrystal }) {
   const group = useRef();
   const { nodes, materials } = useGLTF('gltf/misc/soccer_field.glb');

   return (
      <group ref={group} position={position} dispose={null} onDoubleClick={onDoubleClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
         <group rotation={[-Math.PI / 2, 0, rotationX]} scale={0.01}>
            {ownerCrystal}
            <group position={[0, -129.5, 397.59]}>
               <group position={[0, 129.5, 0]}>
                  <mesh geometry={nodes.Cylinder.geometry} material={materials['Harvest Time 2']} scale={[0.25, 0.25, 7]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Harvest Time 3']} position={[0, 0, 690.24]} scale={[5, 2, 0.5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[0, -1622.5, 0]}>
                  <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Harvest Time']} scale={[0.25, 0.25, 7]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Cylinder_1_1.geometry} material={materials['Harvest Time 1']} position={[0, 0, 690.24]} scale={[5, 2, 0.5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
               <group position={[0, 1622.5, 0]}>
                  <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Harvest Time 4']} scale={[0.25, 0.25, 7]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
                  <mesh geometry={nodes.Cylinder_1_2.geometry} material={materials['Harvest Time 5']} position={[0, 0, 690.24]} scale={[5, 2, 0.5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               </group>
            </group>
            <group position={[0, -136, 126.32]}>
               <mesh geometry={nodes.Box_2.geometry} material={materials['Ocean Tropic 2']} position={[0, 0, 89.66]} scale={[1, 33, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_1.geometry} material={materials['Ocean Tropic 1']} scale={[2, 33, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box_3.geometry} material={materials['Ocean Tropic 3']} position={[0, 0, 180.89]} scale={[0.25, 33, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.Box.geometry} material={materials['Ocean Tropic']} position={[0, 0, -90]} scale={[3, 33, 1]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <group position={[0, -1, 0]}>
               <mesh geometry={nodes.right_fence.geometry} material={materials.Canberra} position={[-2367, 1, 0]} scale={[0.5, 36, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.front_fence2.geometry} material={materials['Lisa 2']} position={[1341, 1827, 0]} scale={[20, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.front_fence1.geometry} material={materials['Lisa 1']} position={[-1341, 1827, 0]} scale={[20, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.back_fence.geometry} material={materials.Lisa} position={[0, -1827, 0]} scale={[47, 0.5, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
               <mesh geometry={nodes.left_fence.geometry} material={materials['Canberra 1']} position={[2367, 1, 0]} scale={[0.5, 36, 5]}>
						<meshStandardMaterial color={color} transparent opacity={1}/>
					</mesh>
            </group>
            <group position={[1202.85, 13.49, 16.43]}>
               <group position={[-55.31, 1628.94, 50.47]} rotation={[0, 0, Math.PI]}>
                  <group position={[-1.7, 104.79, -7.07]}>
                  <mesh geometry={nodes.left_line.geometry} material={materials['Aquarius 7']} position={[477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  <mesh geometry={nodes.top_line.geometry} material={materials['Aquarius 8']} position={[-2.34, 220.28, 0]} scale={[9.56, 0.1, 0.1]} />
                  <mesh geometry={nodes.right_line.geometry} material={materials['Aquarius 9']} position={[-477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  </group>
                  <mesh geometry={nodes.left_bar.geometry} material={materials['Garden Glow 9']} position={[299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.right_bar.geometry} material={materials['Garden Glow 10']} position={[-299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.top_bar.geometry} material={materials['Garden Glow 11']} position={[-5.03, 0, 180]} scale={[6, 0.2, 0.2]} />
               </group>
               <group position={[-55.31, -1628.77, 50.47]}>
                  <group position={[-1.7, 104.79, -7.07]}>
                  <mesh geometry={nodes.left_line_1.geometry} material={materials['Aquarius 10']} position={[477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  <mesh geometry={nodes.top_line_1.geometry} material={materials['Aquarius 11']} position={[-2.34, 220.28, 0]} scale={[9.56, 0.1, 0.1]} />
                  <mesh geometry={nodes.right_line_1.geometry} material={materials['Aquarius 12']} position={[-477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  </group>
                  <mesh geometry={nodes.left_bar_1.geometry} material={materials['Garden Glow 3']} position={[299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.right_bar_1.geometry} material={materials['Garden Glow 4']} position={[-299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.top_bar_1.geometry} material={materials['Garden Glow 5']} position={[-5.03, 0, 180]} scale={[6, 0.2, 0.2]} />
               </group>
               <mesh geometry={nodes.half_line.geometry} material={materials['Aquarius 13']} position={[0, 0, 43.41]} scale={[20, 0.1, 0.1]} />
               <mesh geometry={nodes.grass.geometry} material={materials['Hurricane 1']} scale={[20, 35, 0.5]} />
            </group>
            <group position={[-1224.81, 0, 16.43]}>
               <group position={[-55.31, 1628.94, 50.47]} rotation={[0, 0, Math.PI]}>
                  <group position={[-1.7, 104.79, -7.07]}>
                  <mesh geometry={nodes.left_line_2.geometry} material={materials['Aquarius 4']} position={[477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  <mesh geometry={nodes.top_line_2.geometry} material={materials['Aquarius 5']} position={[-2.34, 220.28, 0]} scale={[9.56, 0.1, 0.1]} />
                  <mesh geometry={nodes.right_line_2.geometry} material={materials['Aquarius 6']} position={[-477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  </group>
                  <mesh geometry={nodes.left_bar_2.geometry} material={materials['Garden Glow 6']} position={[299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.right_bar_2.geometry} material={materials['Garden Glow 7']} position={[-299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.top_bar_2.geometry} material={materials['Garden Glow 8']} position={[-5.03, 0, 180]} scale={[6, 0.2, 0.2]} />
               </group>
               <group position={[-55.31, -1628.77, 50.47]}>
                  <group position={[-1.7, 104.79, -7.07]}>
                  <mesh geometry={nodes.left_line_3.geometry} material={materials['Aquarius 2']} position={[477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  <mesh geometry={nodes.top_line_3.geometry} material={materials.Aquarius} position={[-2.34, 220.28, 0]} scale={[9.56, 0.1, 0.1]} />
                  <mesh geometry={nodes.right_line_3.geometry} material={materials['Aquarius 3']} position={[-477.22, -0.28, 0]} scale={[0.1, 4.5, 0.1]} />
                  </group>
                  <mesh geometry={nodes.left_bar_3.geometry} material={materials['Garden Glow 1']} position={[299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.right_bar_3.geometry} material={materials['Garden Glow']} position={[-299.12, 0, 0]} scale={[0.2, 0.2, 2]} />
                  <mesh geometry={nodes.top_bar_3.geometry} material={materials['Garden Glow 2']} position={[-5.03, 0, 180]} scale={[6, 0.2, 0.2]} />
               </group>
               <mesh geometry={nodes.half_line_1.geometry} material={materials['Aquarius 1']} position={[0, 0, 43.41]} scale={[20, 0.1, 0.1]} />
               <mesh geometry={nodes.grass_1.geometry} material={materials.Hurricane} scale={[20, 35, 0.5]} />
            </group>
            <mesh geometry={nodes.land.geometry} material={materials.Emperor} scale={[49, 38, 0.5]} material-color={'#656565'} />
         </group>
      </group>
   );
};

// ============================================================

useGLTF.preload('gltf/misc/soccer_field.glb');
