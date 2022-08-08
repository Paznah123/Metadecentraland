const BASE_URL = process.env.REACT_APP_DB_BASE_URL;

// ======================================================== auth endpoints

export const REGISTER = `${BASE_URL}/users/register`;
export const LOGIN = `${BASE_URL}/users/login`;

// ======================================================== user endpoints

export const USER_DATA = uid => `${BASE_URL}/users/${uid}`;

// ======================================================== land endpoints

export const LANDS = `${BASE_URL}/lands`;

export const LAND_DATA = landId => `${BASE_URL}/lands/${landId}`;
export const LAND_EDIT = landId => `${BASE_URL}/lands/${landId}/edit`;

// ========================================================
