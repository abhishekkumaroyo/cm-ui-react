const otaMappings = require('../constants/cm');

export function getValue(object, value, defaultValue) {
    // usage : getValue(userAuthenticationDetails, "data.wallet.money.currency")
    if (!object || !value) {
        return defaultValue;
    }
    const valueArr = value.split('.');
    for (let i = 0; i < valueArr.length; i++) {
        if (object[valueArr[i]] != undefined) {
            object = object[valueArr[i]];
        } else {
            return defaultValue;
        }
    }
    return object;
}

/*
    function to return the name of OTA given the cmId
*/
export function getcmName(cmId) {
    let cmData = otaMappings().find((element) => element.id == cmId);
    return cmData;
}

export function getKeyValueFromObject(obj) {
    if (obj) {
        return [Object.keys(obj)[0], Object.values(obj)[0]];
    }
    return null;
}
