import React from 'react'

// ============================================================

const Plane = props => {
    return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[351,1,351]}/>
        <meshPhysicalMaterial color='lightgrey'/>
      </mesh>
    );
};

// ============================================================

export default Plane;