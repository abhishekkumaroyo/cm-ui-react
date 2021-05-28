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

/*
    used to display the values (for bool, array) on the UI
*/
export function displayObjectValue(val) {
    // add a try catch block to check for the undefined values

    if (typeof val === 'boolean') {
        console.log(val.toString());
        return val.toString();
    } else if (Array.isArray(val)) {
        var temp = '';
        for (var i = 0; i < val.length; i++) {
            if (i == val.length - 1) {
                temp = temp + val[i];
            } else {
                temp = temp + val[i];
                temp = temp + ', ';
            }
        }
        console.log(temp);
        return temp;
    } else {
        return val;
    }
}

export function camelCaseToSentenceCase(val) {
    var result = val.replace(/([A-Z])/g, ' $1');
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}
