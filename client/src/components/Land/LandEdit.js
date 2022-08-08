import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap';

import LandContext from '../../store/Land/land-context';
import CryptoContext from '../../store/Crypto/crypto-context';

import Button from '../UI/Button';

// ============================================================

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const StyledRow = styled(Row)`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    margin: .5rem .5rem 1rem;
`;

const buttonStyle = {
    'margin': 'auto .5rem',
    'padding': '0.5rem 2.65rem'
};

// ============================================================

const LandEdit = ({ landData, onEditDone, onError }) => {

    const { _id, isForSale, price, game } = landData;

    // ===================================== hooks

    const landCtx = useContext(LandContext);
    const cryptoCtx = useContext(CryptoContext);

    // ===================================== handlers

    const landDataNotChanged = (config) => {
        const newIsForSale = config.isForSale === 'Yes' ? true : false;
        const newGame = config.game === '' ? 'No game' : '';

        if (newIsForSale === isForSale && +config.price === price && newGame === game) {
            onError('Land data not Changed!');
            return true;
        }
            
        onError('');
        return false;
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const config = {
            isForSale: e.target[0].value,
            price: e.target[1].value,
            game: e.target[2].value,
        };

        if (landDataNotChanged(config)) 
            return;

        const didUpdatePrice = await cryptoCtx.updateLandPrice(_id, config.price);
        
        if (didUpdatePrice)
            await landCtx.editOne(config, _id);

        onEditDone();
    };

    // ===================================== JSX

    return (
        <StyledForm onSubmit={submitHandler}>

            <StyledRow className='g-2'>
            
                <Col md>
                    <FloatingLabel label="For sale">
                        <Form.Select defaultValue={isForSale ? 'Yes' : 'No'}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>

                <Col md>
                    <FloatingLabel label="Price">
                        <Form.Control type="number" max={1000} defaultValue={price} placeholder="Price" />
                    </FloatingLabel>
                </Col>

                <Col md>
                    <FloatingLabel label="Game">
                        <Form.Select defaultValue={game !== '' ? game : 'No game'}>
                            <option>Color quiz</option>
                            <option>Fishies</option>
                            <option>Car drive</option>
                            <option>Snake</option>
                            <option>TicTacToe</option>
                            <option>No game</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>

            </StyledRow>

            <Button type='submit' style={buttonStyle}>Confirm</Button>

        </StyledForm>
    );
};


// ============================================================

export default LandEdit;