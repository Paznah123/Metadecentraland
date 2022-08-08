import Crystal from '../components/3DComponents/base3DObjects/Crystal';
import Road from '../components/3DComponents/Environment/Road';
import Tree from '../components/3DComponents/Environment/Tree';
import Park from '../components/3DComponents/Environment/Park';
import Buildings from '../components/3DComponents/Buildings/Buildings';
import Mall from '../components/3DComponents/Buildings/Mall';
import SoccerField from '../components/3DComponents/Buildings/Misc/SoccerField';
import CountryClub from '../components/3DComponents/Buildings/Misc/CountryClub';
import Market from '../components/3DComponents/Buildings/Misc/Market';
import Jail from '../components/3DComponents/Buildings/Misc/Jail';
import Planetarium from '../components/3DComponents/Buildings/Misc/Planetarium';
import CityHall from '../components/3DComponents/Buildings/Misc/CityHall';
import School from '../components/3DComponents/Buildings/Misc/School';
import Theatre from '../components/3DComponents/Buildings/Misc/Theatre';

import { mapPriceToColor, mapOwnerColor, mapCrystalHeight } from '../utils/mappers';

// ============================================================

export const capitalizeFirstLetter = (word) => {
   return word[0].toUpperCase() + word.slice(1);
};

export const prettyWalletAddress = (address) => {
   return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};

// ============================================================

const landJudge = (land, idx, onClick, cryptoCtx, uid) => {
    const userAddress = cryptoCtx.userAddress;
    const mintedLands = cryptoCtx.mintedLands;

    const { price, type, _id } = land;
    const owner = mintedLands?.find(land => land.landId === _id)?.owner.toLowerCase();

    const pointerHandler = (cursor) => { document.body.style.cursor = cursor };

    const props = {
        key: idx,
        onDoubleClick: (e) => { e.stopPropagation(); onClick(land); },
        onPointerOver: (e) => { e.stopPropagation(); pointerHandler('pointer'); },
        onPointerOut: (e) => { e.stopPropagation(); pointerHandler('default'); },
        color: mapPriceToColor(price),
        ownerCrystal: owner && <Crystal position={[0, 0, mapCrystalHeight(type)]} scale={[100,200,100]} rotationX={Math.PI/2} color={mapOwnerColor(owner, userAddress, uid)} />,
        ...land
    };

    const miscComponents = {
        'stadium': <SoccerField {...props} />,
        'country_club': <CountryClub {...props} />,
        'market': <Market {...props} />,
        'jail': <Jail {...props} />,
        'planetarium': <Planetarium {...props} />,
        'city_hall': <CityHall {...props} />,
        'school': <School {...props} />,
        'theatre': <Theatre {...props} />
    };

    let landComponent = miscComponents[type];

    if (!landComponent && /^mall/.test(type)) { // land is a mall
        props.ownerCrystal = owner && <Crystal position={[0, mapCrystalHeight(type), 0]} scale={[1,2,1]} color={mapOwnerColor(owner, userAddress, uid)} />;
        landComponent = <Mall type={type} {...props} />;
    }

    return landComponent;
};

// ============================================================

const renderBuildings = (landState, landModalHandler, cryptoCtx, uid) => {
    const userAddress = cryptoCtx.userAddress;
    const mintedLands = cryptoCtx.mintedLands;

    const BuildingTypes = [
        'small_house',
        'medium_house',
        'medium_house2',
        'medium_house3',
        'big_house1',
        'big_house2',
        'mansion',
        'apartments1',
        'apartments2',
        'apartments3',
        'apartments4',
        'skyscraper1',
        'skyscraper2',
        'skyscraper3',
        'skyscraper4',
        'skyscraper5',
        'skyscraper6',
    ];
    
    const createLandProps = (land, idx) => {
        const { price, type, _id, position } = land;
        const owner = mintedLands?.find(land => land.landId === _id)?.owner.toLowerCase();

        return {
            key: idx,
            onDoubleClick: (e) => { e.stopPropagation(); landModalHandler(land); },
            color: mapPriceToColor(price),
            ownerCrystal: owner && <Crystal position={[position[0], position[1] + mapCrystalHeight(type), position[2]]} scale={[1,2,1]} color={mapOwnerColor(owner, userAddress, uid)} />,
            ...land
        };
    };

    /* Instancing gives better performance when we render many similar models */
    return (<>
        {BuildingTypes.map((house, idx) => {
            return <Buildings key={idx} lands={landState.lands} createProps={createLandProps} modelName={house} />
        })}
    </>);
};

// ============================================================

export const renderEnvironment = (landState, landModalHandler, cryptoCtx, uid) => {
    return (<>
        {landState.roads.map((road, idx) => {
            return ( <Road key={idx} {...road} />);
        })}
        {landState.trees.map((tree, idx) => {
            return ( <Tree key={idx} position={tree.position} rotation={[0, Math.PI, 0]} scale={tree.position[1]} />);
        })}
        {landState.parks.map((park, idx) => {
            return ( <Park key={idx} {...park} /> );
        })}
        {landState.lands.map((land, idx) => {
            return ( landJudge(land, idx, landModalHandler, cryptoCtx, uid) );
        })}
        {renderBuildings(landState, landModalHandler, cryptoCtx, uid)}
    </>);
};

// ============================================================
