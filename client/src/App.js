import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from 'styled-components';

import Home from './components/Home';
import Info from './components/Info';
import Wallet from './components/Wallet';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import NavBar from './components/UI/NavBar';

import LandContext from './store/Land/land-context';

import BackgroundPic from './assets/background.png';

import { uiColors } from './constants/Colors';

// ============================================================ styles

const Container = styled.div`
    height: 91.9vh;
    width: 100vw;
`;

const Title = styled.h1`
    position: fixed;
    z-index: -1;
    font-size: 10vw;
    font-weight: bold;
    top: 15%;
    left: 15%;
    color: ${uiColors.primary};
    margin: 0;
    opacity: 0.5;
    
    @media (max-height: 768px) {
        display: flex;
        text-align: center;
        top: 30%;
    }
`;

const BackgroundContainer = styled.img`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
    object-fit: cover;
`;

// ============================================================

function App() {  

    // ===================================== hooks

    const landCtx = useContext(LandContext);

    const [isLoading, setIsLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [showWallet, setShowWallet] = useState(false);

    useEffect(() => { landCtx.fetchAll(setIsLoading); }, []);

    // ===================================== handlers

    const infoVisibilityHandler = () => { setShowInfo(prevState => !prevState); };
    
    const walletVisibilityHandler = () => { setShowWallet(prevState => !prevState); };
        
    // ===================================== JSX

    return (
        <Container>
            <Router>
            
                { showInfo && <Info onClose={infoVisibilityHandler} /> }
                { showWallet && <Wallet onClose={walletVisibilityHandler} /> }

                <NavBar 
                    setShowInfo={infoVisibilityHandler} 
                    setShowWallet={walletVisibilityHandler} 
                />

                <BackgroundContainer src={BackgroundPic} />
                <Title>Decentraland</Title>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home isLoading={isLoading} />} />
                </Routes>

            </Router>        
        </Container>
    );
};

// ============================================================

export default App;
