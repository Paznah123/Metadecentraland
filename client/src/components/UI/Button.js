import React from 'react';
import styled from 'styled-components';

import { uiColors } from '../../constants/Colors'

// ============================================================

const Container = styled.button`
    padding: 0.5rem 2rem;
    margin: 6px;
    text-align: center;
    font: inherit;
    font-size: 1.25rem;
    cursor: pointer;
    color: ${props => props.hover ? uiColors.tertiary : 'white'};
    background-color: ${props => props.hover ? 'transparent' : uiColors.tertiary};
    border: 1px solid  ${uiColors.tertiary};
    border-radius: 6px;
    
    ${props => props.hover && `
        &:hover,
        &:active {
            background-color: ${uiColors.tertiary};
            border-color: ${uiColors.tertiary};
            color: white;  
        }
    `}

    @media (max-width: 280px) {
        margin-left: 0;
    }
`;

// ============================================================

const Button = props => {
    return (
        <Container {...props} onClick={props.onClick}>
            {props.children}
        </Container>
    );
};

// ============================================================

export default Button;