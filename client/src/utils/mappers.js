import { priceColors } from '../constants/Colors';
import { capitalizeFirstLetter } from '../utils/helpers';

// ============================================================

export const mapPriceToColor = (price) => {
    if (price < 15)
        return priceColors.cheapest
    else if (price < 30) 
        return priceColors.ultraCheap;
    else if (price < 50) 
        return priceColors.extremelyCheap;
    else if (price < 75)
        return priceColors.veryCheap;
    else if (price < 100) 
        return priceColors.cheap;
    else if (price < 150)
        return priceColors.middle;
    else if (price < 225)
        return priceColors.expensive;
    else if (price < 300)
        return priceColors.veryExpensive;
    return priceColors.mostExpensive;
}; 

// ============================================================

export const mapOwnerColor = (ownerId, userAddress, uid) => {
    if (ownerId === userAddress && uid)
        return priceColors.userOwned;      
    else if (ownerId !== '0x0000000000000000000000000000000000000000')
        return priceColors.othersOwned;
    return null;
};

// ============================================================

export const mapCrystalHeight = (type) => {
    switch (type) {
        case 'mansion':
            return 4;
        case 'small_house':
        case 'medium_house':
        case 'medium_house2':
        case 'medium_house3':
        case 'big_house1':
            return 5;
        case 'mall2':
        case 'mall5':
        case 'big_house2':
        case 'apartments1':
            return 7;
        case 'mall3':
        case 'apartments2':
            return 8;
        case 'mall1':
        case 'mall4':
            return 9;
        case 'apartments3':
            return 12;
        case 'apartments4':
            return 14;
        case 'skyscraper6':
            return 17;
        case 'skyscraper1':
            return 25;
        case 'skyscraper4':
        case 'skyscraper5':
            return 26;
        case 'skyscraper2':
            return 28;
        case 'skyscraper3':
            return 37;
        case 'country_club':
            return 600;
        case 'market':
        case 'jail':
            return 800;
        case 'city_hall':
            return 900;
        case 'stadium':
        case 'planetarium':
            return 1400;
        default:
            return 0;
    }
};

// ============================================================

export const mapTypeToName = (type) => {
    if (type.includes('big'))
        return 'Villa';
    else if (type.includes('house'))
        return 'House';
    else if (type.includes('mall'))
        return 'Mall';
    else if (type.includes('sky'))
        return 'Skyscraper';
    else if (type.includes('apartments'))
        return 'Apartments'; 
    return capitalizeFirstLetter(type.replace("_", " "));
};

// ============================================================

const mapIntensity = (currHour) => {
    if (currHour > 5 && currHour < 12)
        return 0.7;
    else if (currHour >= 12 && currHour < 18)
        return 0.7;
    else if (currHour >= 18 && currHour < 24)
        return 0.5;
    return 0.3;
};

export const mapHourToPlanetHeight = () => {
    let currHour = new Date().getHours();

    const planetPosByHour = [
        120, 80, 40, 0, -40, // 00:00 - 04:00  - moon descend
        -80, -80, -20, 10, 40, 70, 100, 130, // 05:00 - 12:00 - sun ascend
        100, 70, 40, 10, -20, -50, -80, -40, // 13:00 - 20:00 - sun descend
        0, 40, 80, // 21:00 - 23:00 - moon ascend
    ];

    return {
        planet: currHour > 5 && currHour < 19 ? 'sun' : 'moon',
        height: planetPosByHour[currHour],
        intensity: mapIntensity(currHour)
    };
};

// ============================================================
