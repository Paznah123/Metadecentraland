import { createContext } from "react";

// ============================================================

const CryptoContext = createContext({
    mintedLands: [],
    userAddress: null,
    isUserWorldOwner: false,
    connect: () => {},
    checkMinted: () => {},
    mintLand: () => {},
    buyLand: () => {},
    buyTokens: () => {},
    getUserBalance: () => {},
    getLandOwner: () => {},
    updateWorld: () => {},
    updateLandPrice: () => {},
});

// ============================================================

export default CryptoContext;
