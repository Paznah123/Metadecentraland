import React, { useState } from 'react';
import styled from 'styled-components';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { prettyWalletAddress } from '../../utils/helpers';

// ============================================================

const Container = styled.div`
    display: inline-block;
`;

const Address = styled.div`
    display: inline-block;
    border-radius: 25px;
    background-color: #D3D3D3;
    padding: .25rem ${props => props.copied ? '2.2rem' : '1rem'};
    font-size: 1rem;
    text-align: center;
    
    &:hover {
        cursor: pointer;
    }
`;

// ============================================================

const AddressPill = ({ children }) => {
    const [copied, setCopied] = useState(false);

    const copyHandler = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Container>
            <CopyToClipboard text={children}
                onCopy={copyHandler}>
                <Address copied={copied}>
                {copied ? 'Copied' : prettyWalletAddress(children)}
                </Address>
            </CopyToClipboard>
        </Container>
    );
};

// ============================================================

export default AddressPill;