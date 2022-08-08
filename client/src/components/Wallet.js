import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Form, FloatingLabel, Row, Col } from 'react-bootstrap';

import CryptoContext from '../store/Crypto/crypto-context';

import Loader from './UI/Loader';
import Modal from './UI/Modal';
import Button from './UI/Button';
import Pill from './UI/Pill';

// ============================================================ styles

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;

   span {
      margin: .5rem;
      font-size: 1.5rem;
   }

   @media (max-width: 768px) {
      align-self: start;
   }
`;

const StyledForm = styled(Form)`
   display: flex;
   flex-direction: row; 
   justify-content: space-between;
   
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const StyledRow = styled(Row)`
   margin: .5rem .5rem 1rem;
`;

const Error = styled.div`
    display: flex;
    justify-content: center;
    color: red;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 1rem;
`;

// ============================================================ component

const Wallet = ({ onClose }) => {

    // ===================================== hooks

    const cryptoCtx = useContext(CryptoContext);

    const [tokens, setTokens] = useState(1);
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState();

    const getBalance = useCallback(async () => {
        const balance = await cryptoCtx.getUserBalance();
        setBalance(balance);
    }, [cryptoCtx]);

    useEffect(() => {  getBalance();  }, [getBalance]);
    
    // ===================================== handlers 

    const buyTokensHandler = async (e, amount) => {
        e.preventDefault();

        if (amount < 1) {
            setError('Amount must be at least 1 RPC');
            return;
        }

        setError('');
        const didPurchased = await cryptoCtx.buyTokens(amount);

        if (didPurchased) {
            getBalance();
            toast.success('Purchased tokens!');
        }
    };

    // ===================================== JSX
            
    return (
        <Modal title={'Wallet'} onClose={onClose}>
            { !cryptoCtx.userAddress ? <Loader text={'Loading...'} color={'black'} /> : 
                <Container>

                    <InfoContainer>
                        <span>
                            Address: <Pill>{cryptoCtx.userAddress}</Pill>
                        </span>
                        <span>Balance: {balance} PRC</span>
                    </InfoContainer>

                    { !cryptoCtx.isUserWorldOwner &&
                        <StyledForm>  
                            <StyledRow className='g-2'>
                                <Col md>
                                    <FloatingLabel label="Amount">
                                        <Form.Control onChange={(e) => setTokens(Number(e.target.value))} type="number" max={500} defaultValue={tokens} placeholder="Price" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <Button onClick={(e) => buyTokensHandler(e, tokens)}>Buy PRC</Button>
                                </Col>
                            </StyledRow>
                        </StyledForm>
                    }
                </Container>
            }
            
            { error && <Error>{error}</Error> }

        </Modal>
    );
};

// ============================================================

export default Wallet;