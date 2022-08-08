import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import CloseIcon from '../../assets/close-icon.svg';

// ============================================================ styles

const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 10vh;
    left: 5%;
    width: 100%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 9999;
    max-height: 100%;
    overflow-y: auto;
    animation: slide-down 300ms ease-out forwards;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 40rem;
        left: calc(50% - 20rem);
    }

    @media (max-width: 768px) {
        left: 0;
        border-radius: 0;
    }
    
    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(-3rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ModalTitle = styled.h1`
    display: flex;
    justify-content: center;
`;

const IconContainer = styled.img`
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    align-self: end;
`;

// ============================================================

const Backdrop = ({ onClose }) => { return ( <BackdropContainer onClick={onClose}/> ); };

const ModalOverlay = ({ children, title, onClose }) => {
    return (
        <ModalContainer>
            <IconContainer src={CloseIcon} onClick={onClose} />
            { title && 
               <>
                  <ModalTitle>{title}</ModalTitle>
                  <hr></hr>
               </>
            }
            {children}
        </ModalContainer>
    );
};

// ============================================================ component


const Modal = ({ children, title, onClose }) => {
    const portalElement = document.getElementById('overlays');

    return (<>
        {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay title={title} onClose={onClose}>{children}</ModalOverlay>, portalElement)}
    </>);
};

// ============================================================

export default Modal;