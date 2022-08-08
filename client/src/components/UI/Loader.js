import React from 'react';
import styled from 'styled-components';

import Spinner from 'react-bootstrap/Spinner';

// ============================================================

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    span  {
        color: ${props => props.color || '#fff'};
        font-size: 2rem;
    }
`;

// ============================================================

const Loader = ({ text, color }) => {
    return (
        <Container color={color}>
            <Spinner animation="grow" size="lg" variant="secondary" />
            <span>{text}</span>
        </Container>
    );
};

// ============================================================

export default Loader;