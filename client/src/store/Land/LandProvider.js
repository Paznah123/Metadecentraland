import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import LandContext from './land-context';

import { LANDS, LAND_DATA, LAND_EDIT } from '../../endpoints';

// ============================================================

const fetchLands = async (setGameData, setIsLoading) => {
    await axios
        .get(LANDS)
        .then(res => { 
            setGameData({ ...res.data });
            setIsLoading(false);
        })
        .catch((err) => { console.log(err.message) });
};

// ============================================================

const fetchLand = async (setLandOwner, _id) => {
    await axios
        .get(LAND_DATA(_id))
        .then(res => setLandOwner(res.data.owner))
        .catch((err) => console.log(err));
};

// ============================================================

const editLand = async (setGameData, config, _id) => { 
    await axios
        .post(LAND_EDIT(_id), config)
        .then(res => { 
            setGameData(prevState => ({
               ...prevState, // copy the previous state
               lands: [...prevState.lands.filter(land => land._id !== _id), res.data.land] // replace the old land data with the new one
            }));
            toast.success('Edit done!');
        })
        .catch((err) => { console.log(err) });
};

// ============================================================

const LandProvider = props => {
    const [gameData, setGameData] = useState({
        roads: [],
        trees: [],
        parks: [],
        lands: [],
    });

    const landCtx = {
        gameData,
        fetchAll: async (setIsLoading) => { await fetchLands(setGameData, setIsLoading) },
        fetchOne: async (setLandOwner, _id) => { await fetchLand(setLandOwner, _id) },
        editOne: async (config, _id) => { await editLand(setGameData, config, _id) },
    };

    return (
        <LandContext.Provider value={landCtx} >
            {props.children}
        </LandContext.Provider>
    );
};

// ============================================================

export default LandProvider;