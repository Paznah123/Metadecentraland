import React from 'react'
import styled from 'styled-components';

import Modal from './UI/Modal';

import { priceColors } from '../constants/Colors';

// ============================================================

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: end;
   font-size: 1rem;
   font-weight: bold;

   @media (max-width: 768px) {
      flex-direction: row;
      font-size: .75rem;

   }
`;

const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-self: start;

   li {
      margin: .5rem;
   }
`;

const ColorBox = styled.img`
   width: 25px;
   height: 25px;
   border-radius: 6px;
   background-color: ${props => props.color};
   margin: 0 .5rem;
`;

const colorStyle = {
   display: 'flex',
   alignItems: 'center',
};

// ============================================================

const Info = ({ onClose }) => {
    const priceColorsArr = Object.values(priceColors);

    return (
        <Modal title={'Info'} onClose={onClose}>
            <Container>
                <InfoContainer>
                    <li>Left click and drag to move around</li>
                    <li>Right click and drag to rotate</li>
                    <li>Use the mouse wheel to zoom in / out</li>
                    <li>Double click on a property to view it's details</li>
                    <li>Lands you own have a crystal above colored <ColorBox color={priceColors.userOwned}/></li>
                    <li>Lands others own have a crystal above colored <ColorBox color={priceColors.othersOwned}/></li>
                    <li>Prices are displayed by different colors</li>
                    <li>To purchase lands, connect your metamask wallet</li>
                    <li>Only minted lands can be bought</li>
                </InfoContainer>
                <InfoContainer>
                    {['< 15$', '< 30$', '< 50$', '< 75$', '< 100$', '< 550$', '< 225$', '< 300$', '> 300$']
                    .map((price, idx) => (
                        <li key={idx} style={colorStyle}>
                            <ColorBox color={priceColorsArr[idx]}/> {price} 
                        </li>
                    ))}
                </InfoContainer>
            </Container>
        </Modal>
    );
};

// ============================================================

export default Info;
