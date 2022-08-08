import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import styled from 'styled-components';

import Loader from '../UI/Loader';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Pill from '../UI/Pill';
import LandEdit from './LandEdit';

import LandContext from '../../store/Land/land-context';
import CryptoContext from '../../store/Crypto/crypto-context';

import { mapTypeToName } from '../../utils/mappers';

// ============================================================ styles

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
        margin: .5rem;
    }

    @media (max-width: 768px) {
        align-self: start;
    }
`;

const ActionsContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;

    @media (max-width: 768px) {
        width: 100%;
    }
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

const LandInfo = ({ landData, onClose, onPlay, onActionDone }) => {

    // ===================================== 

    const loggedUser = JSON.parse(localStorage.getItem('userInfo'));
    const { type, position, price, isForSale, _id, game } = landData;

    // ===================================== hooks

    const landCtx = useContext(LandContext);
    const cryptoCtx = useContext(CryptoContext);

    const [landOwner, setLandOwner] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isMinted, setIsMinted] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchLandData = async () => {
            await landCtx.fetchOne(setLandOwner, _id);
            const isMinted = await cryptoCtx.checkMinted(_id);
            const landOwner = await cryptoCtx.getLandOwner(_id);

            if (!isMinted) setError('Land not minted');

            setLandOwner(landOwner);
            setIsMinted(isMinted);
            setIsLoading(false);
        };
        fetchLandData();
    }, [landCtx, cryptoCtx, _id]);
    
    // ===================================== handlers

    const purchaseHandler = async () => {
        const userBalance = await cryptoCtx.getUserBalance();

        if (price > userBalance) {
            setError('Insufficient tokens in wallet!');
            return;
        }

        const landConfig = {
            landId: _id,
            landOwner,
            price,
        };

        const didPurchase = await cryptoCtx.buyLand(landConfig);

        if (didPurchase) {
            toast.success('Purchased land!')
            onClose();
            onActionDone();
        }
    };

    const mintHandler = async () => {
        const landConfig = {
            landId: _id,
            landType: type,
            position,
            price
        }

        const didMint = await cryptoCtx.mintLand(landConfig);

        if (didMint) {
            toast.success('Minted land!')
            onClose();
            onActionDone();
        }
    };

    const showEditHandler = () => { setShowEdit(prevState => !prevState); };

    const isUserLandOwner = loggedUser._id && cryptoCtx.userAddress === landOwner;

    // ===================================== JSX
   
    return (
        <Modal title={mapTypeToName(type)} onClose={onClose}>
            { isLoading ? <Loader text={'Fetching data...'} color={'black'} /> :
                <Container>
                    <InfoContainer>
                        { isUserLandOwner && <span>You own this land!</span> }

                        { landOwner && <span>Owner address: <Pill>{landOwner}</Pill></span> }

                        { isForSale && <span>Price: {price} PRC</span> }
                        
                        <span>For sale: {isForSale && isMinted ? 'Yes' : 'No'}</span>
                    </InfoContainer>
                    <ActionsContainer>
                        { loggedUser._id && !isMinted && cryptoCtx.isUserWorldOwner && <Button onClick={mintHandler}>Mint</Button>}

                        {/* if user is logged in and does not own this land and land is for sale */}
                        { isMinted && loggedUser._id && !isUserLandOwner && isForSale && <Button onClick={purchaseHandler}>Buy</Button>}

                        {/* if user owns this land*/}
                        { loggedUser._id && isUserLandOwner && <Button onClick={showEditHandler}>{ showEdit ? 'Cancel' : 'Edit'}</Button>}

                        { game && <Button onClick={() => onPlay(game)}>Game</Button> }
                    </ActionsContainer>
                </Container>
            }

            { showEdit && <LandEdit landData={landData} onEditDone={() => { onClose(); }} onError={setError}/> }
            { error && <Error>{error}</Error> }

        </Modal>
    );
};

// ============================================================

export default LandInfo;