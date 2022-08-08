import React from 'react';
import styled from 'styled-components';

import Modal from './UI/Modal';

// ============================================================ 

const Container = styled.iframe`
   width: 100%;
   height: 45rem;
   border: 3px solid black;
   border-radius: 6px; 
`;

// ============================================================ 

const Game = ({ game, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <Container src={`games/${game}.html`}></Container>
        </Modal>
    );
};

// ============================================================ 

export default Game;