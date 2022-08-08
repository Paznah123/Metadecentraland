import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';

import InfoIcon from '../../assets/info-icon.svg'
import WalletIcon from '../../assets/wallet-icon.svg'

import Button from './Button';

import { uiColors } from '../../constants/Colors';

import { capitalizeFirstLetter } from '../../utils/helpers';

// ============================================================ styles

const navbarTextStyle = { 
    display: 'flex', 
    alignItems: 'center' 
};

const displayNameStyle = { 
    textDecoration: 'underline', 
    margin: '.5rem'
};

const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const IconContainer = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    margin: .5rem;
    filter: invert(100%);
    cursor: pointer;
`;

// ============================================================ component

const NavBar = ({ setShowInfo, setShowWallet }) => {

    const loggedUser = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();

    // ===================================== handlers

    const authHandler = (event) => {
        event.preventDefault();
        const authRequest = event.target.innerHTML;

        switch (authRequest) {
            case 'Logout':
                localStorage.removeItem('userInfo');
                navigate('/');
                break;
            case 'Login':
                navigate('/');
                break;
            case 'Register':
                navigate('/register');
                break;
            case 'Guest':
                localStorage.setItem('userInfo', JSON.stringify({ fullName: 'Guest'}));
                navigate('/home');
                break;
            default:
                break;
        }
    };

    const userName = capitalizeFirstLetter(loggedUser?.fullName || 'Guest');

    // ===================================== conditional renders

    const authContent = // when user is logged in
    <> { loggedUser && 
        <div style={{ display: 'flex'}}>
            <Navbar.Text style={navbarTextStyle}>
                Signed in as: <p style={displayNameStyle}>{userName}</p>
            </Navbar.Text> 
            <Button onClick={authHandler}>Logout</Button>
        </div>
    }</>;

    const guestContent = // when user is logs as guest
    <> { !loggedUser && <Button onClick={authHandler}>Guest</Button> } </>;

    // ===================================== JSX

    return (
        <Navbar variant="dark" expand="lg" style={{ backgroundColor: uiColors.primary }}>
            <Container fluid>
                <Navbar.Brand style={{ fontSize: '2rem'}}>P&R.Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav style={infoStyle} className="me-auto my-2 my-lg-0">
                    { loggedUser && <IconContainer src={InfoIcon} onClick={() => setShowInfo()} /> }               
                    { loggedUser && loggedUser._id && <IconContainer src={WalletIcon} onClick={() => setShowWallet()} /> }               
                </Nav>
                <Nav> 
                    { authContent } 
                    { guestContent } 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// ============================================================

export default NavBar;