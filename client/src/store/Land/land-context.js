import { createContext } from "react";

// ============================================================

const LandContext = createContext({
    gameData: {},
    fetchAll: () => {},
    fetchOne: () => {},
    editOne: () => {},
    onMint: () => {},
});

// ============================================================

export default LandContext;
