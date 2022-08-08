import React, { useState, useEffect, useContext, Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';
import { Canvas } from '@react-three/fiber';

import LandContext from '../store/Land/land-context';
import CryptoContext from '../store/Crypto/crypto-context';

import World from './3DComponents/World';
import Loader from './UI/Loader';
import Game from './Game';
import LandInfo from './Land/LandInfo';

import { renderEnvironment } from '../utils/helpers';

// ============================================================ styles

const Container = styled.div`
   height: 100%;
   width: 100vw;
   background: black;
`;

// ============================================================ component

const Home = ({ isLoading }) => {

    // ===================================== hooks

    
    const loggedUser = JSON.parse(localStorage.getItem('userInfo'));

    const landCtx = useContext(LandContext);
    const cryptoCtx = useContext(CryptoContext);

    const [modalIsShown, setModalIsShown] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [game, setGame] = useState('');
    const [showGame, setShowGame] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('userInfo'))
            navigate('/login');
        else 
            cryptoCtx.connect();
    }, [navigate, cryptoCtx]);

    // ===================================== handlers

    const landModalHandler = (landInfo) => {
        setModalContent(landInfo);
        setModalIsShown(true);
    };

    const handleGame = (game) => {
        setShowGame(true);
        setGame(game)
    };

    // ===================================== JSX

    return (
        <Container>
    
            <ToastContainer />

            { modalIsShown && 
                <LandInfo 
                    landData={modalContent} 
                    onClose={() =>  setModalIsShown(false)} 
                    onPlay={handleGame}
                    onActionDone={cryptoCtx.updateWorld}
                />
            }

            { showGame && <Game game={game} onClose={() => setShowGame(false)} /> }
            
            { isLoading ? <Loader text={'Retrieving data...'} /> :
                <Suspense fallback={<Loader text={'Loading world...'} />}>
                    <Canvas camera={{ position: [0,80,250], fov: 55 }}>
                        <World />
                        {renderEnvironment(landCtx.gameData, landModalHandler, cryptoCtx, loggedUser._id)}
                    </Canvas>
                </Suspense>
            }

        </Container>
    );
};

// ============================================================

export default Home;