import { useState } from 'react';

import Web3 from 'web3';

import WorldContract from '../../contracts/World.json';
import TokenContract from '../../contracts/Token.json';

import CryptoContext from './crypto-context';

// ============================================================

const getWeb3 = () => new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                resolve(web3);
            } catch (error) {
                reject(error);
            }
        } else if (window.web3) {
            const web3 = window.web3;
            console.log("Injected web3 detected.");
            resolve(web3);
        } else {
            const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
            const web3 = new Web3(provider);
            console.log("No web3 instance injected, using Local web3.");
            resolve(web3);
        }
    });
});

// ============================================================

const initContract = (web3, networkId, Contract) => {
    const deployedNetwork = Contract.networks[networkId];
    const contract = new web3.eth.Contract(Contract.abi, deployedNetwork && deployedNetwork.address);

    return contract;
};

// ============================================================

const initState = async (setCryptoState) => {
    try {
        const { ethereum } = window;

        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();
        
        const tokenContract = initContract(web3, networkId, TokenContract);
        const worldContract = initContract(web3, networkId, WorldContract);

        const worldOwnerAddress  = await worldContract.methods.getWorldOwnerAddress().call();
        const mintedLands = await worldContract.methods.getOwners().call();

        setCryptoState({
            web3,
            worldOwnerAddress: worldOwnerAddress.toLowerCase(),
            tokenContract,
            worldContract,
            mintedLands,
        });
        
        const setUserAddress = (address) => setCryptoState(prevState => ({ ...prevState, userAddress: address }));

        ethereum?.request({ method:'eth_requestAccounts' }).then(res => setUserAddress(res[0]));
        ethereum?.on('accountsChanged', async (res) => setUserAddress(res[0]));

    } catch (error) {
        console.log('Failed to load web3, accounts or contracts.');
        console.error(error);
    }
};

const mint = async (cryptoState, landConfig) => {
    let didMint = false;
    
    try {
        const { landId, price } = landConfig;
        await cryptoState.worldContract.methods.mint(landId, price).send({ from: cryptoState.worldOwnerAddress });
        didMint = true;
    } catch (err) {
        console.log(err);
    }
    return didMint;
};

const checkIfMinted = async (cryptoState, landId) => {
    return await cryptoState.worldContract.methods.checkIfMinted(landId).call();
};

// ============================================================

const buyLand = async (cryptoState, landConfig) => {
    const { web3, worldContract, tokenContract, userAddress } = cryptoState;
    let purchasedLand = false;
    try {
        await tokenContract.methods.approve(worldContract._address, web3.utils.toWei(landConfig.price.toString(), 'ether')).send({ from: userAddress });
        purchasedLand = await worldContract.methods.transferLand(landConfig.landId, landConfig.landOwner).send({ from: userAddress });
    } catch (err) {
        console.log(err);
    }
    return purchasedLand;
};

// ============================================================

const purchaseTokens = async (cryptoState, amount) => {
    const { web3, tokenContract, userAddress } = cryptoState;
    let purchasedTokens = false;

    try {
        await tokenContract.methods.buyTokens().send({ from: userAddress, value: web3.utils.toWei(amount.toString(), 'ether').slice(0, -1) });
        purchasedTokens = true;
    } catch (err) {
        console.log(err);
    }
    return purchasedTokens;
};

const getUserTokens = async (cryptoState) => {
    const { web3, tokenContract, userAddress } = cryptoState;

    try {
        const response = await tokenContract?.methods.balanceOf(userAddress).call();
        return web3?.utils.fromWei(response, 'ether');
    } catch (err) {
        console.log(err);
    }
};

// ============================================================

const getLandOwnerAddress = async (cryptoState, landId) => {
    const { worldContract } = cryptoState;
    const ownerAddress =  await worldContract.methods.getOwnerAddress(landId).call();

    return ownerAddress.toLowerCase();
};

// ============================================================

const updateLandPrice = async (cryptoState, landId, price) => {
    const { worldContract, userAddress } = cryptoState;
    let didUpdatePrice = false;

    try {
        await worldContract.methods.updateLandPrice(landId, price).send({ from: userAddress });
        didUpdatePrice = true;
    } catch (err) {
        console.log(err);
    }
    return didUpdatePrice;
};

// ============================================================

const fetchMintedLands = async (cryptoState, setCryptoState) => {
    const { worldContract } = cryptoState;
    const newMintedLands = await worldContract.methods.getOwners().call();

    setCryptoState(prevState => ({
        ...prevState,
        mintedLands: newMintedLands
    }));
};

// ============================================================

const CryptoProvider = props => {
    const [cryptoState, setCryptoState] = useState({
        web3: null,
        worldOwnerAddress: null,
        userAddress: null,
        tokenContract: null,
        worldContract: null,
        mintedLands: null,
    });

    const cryptoCtx = {
        mintedLands: cryptoState.mintedLands,
        userAddress: cryptoState.userAddress,
        isUserWorldOwner: cryptoState.userAddress === cryptoState.worldOwnerAddress,
        connect: async () => { await initState(setCryptoState) },
        checkMinted: async (landId) => { return await checkIfMinted(cryptoState, landId); },
        mintLand: async (landConfig) => { return await mint(cryptoState, landConfig); },
        buyLand: async (landConfig) => { return await buyLand(cryptoState, landConfig); },
        buyTokens: async (amount) => { return await purchaseTokens(cryptoState, amount); },
        getUserBalance: async () => { return await getUserTokens(cryptoState); },
        getLandOwner: async (landId) => { return await getLandOwnerAddress(cryptoState, landId); },
        updateWorld: async () => { fetchMintedLands(cryptoState, setCryptoState) },
        updateLandPrice: async (landId, price) => { return await updateLandPrice(cryptoState, landId, price)},
    };

    return (
       <CryptoContext.Provider value={cryptoCtx} >
          {props.children}
       </CryptoContext.Provider>
    );
 };

// ============================================================

export default CryptoProvider;