import React from 'react';
import styled from 'styled-components';

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { uiColors } from '../../constants/Colors';

// ============================================================ styles

const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 0 1rem;
`;

const Label = styled.label`
   margin: 0 3px .5rem;
   font-size: 1rem;
   color: white;
`;

const StyledInput = styled.input`
   padding: 8px;
   border: 2px solid ${uiColors.tertiary};
   border-radius: 6px;
   outline: none;
   font-size: 1rem;
   box-sizing: border-box;
   margin: 0 0 3px 0;
`;

// ============================================================ component

const InputField = props => {
    const {
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value
    } = props;

    const renderTooltip = props => (
        <Tooltip  {...props}>{errorMessage}</Tooltip >
    );
    
    // ===================================== JSX

    return (
        <Container>
            { props.label && <Label>{props.label}</Label>}
            <OverlayTrigger 
                show={errorMessage && !isValid}
                overlay={renderTooltip}
            >
                <StyledInput 
                type={type} 
                name={name} 
                value={value} 
                onChange={handleChange} 
                placeholder={`Enter ${name}`}
                debounceTimeout={500}
                />
            </OverlayTrigger>
        </Container>
    );
};

// ============================================================

export default React.memo(InputField);
