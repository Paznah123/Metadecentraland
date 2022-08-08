import React from 'react';

import { Stars } from '@react-three/drei';

import Controls from './base3DObjects/Controls';
import Planet from './Environment/Planet';
import Plane from './base3DObjects/Plane';

import SunTexture from '../../assets/sun-texture.jpg';
import MoonTexture from '../../assets/moon-texture.jpg';

import { mapHourToPlanetHeight } from '../../utils/mappers';

// ============================================================

const World = () => {
    const { planet, intensity, height } = mapHourToPlanetHeight();

    return (<>
        <ambientLight intensity={intensity} />
        <Controls />
        <Planet 
            surface={planet === 'sun' ? SunTexture : MoonTexture} 
            size={planet === 'sun' ? 30 : 15} 
            color={planet === 'sun' ?  'yellow' : 'grey'}
            position={[450,height,-650]} 
            rotationSpeed={0.005} 
        />
        <Stars radius={200}/>
        <Plane position={[0,-0.5,0]}/>
    </>);
};

// ============================================================

export default World;