const otaMappings = require('../constants/cm');

/*
    function to return the name of OTA given the cmId
*/
export function getcmName(cmId) {
    let cmData = otaMappings().find((element) => element.id == cmId);
    return cmData;
}

/*
    used to display the values (for bool, array) on the UI
*/
export function displayObjectValue(val) {
    // add a try catch block to check for the undefined values

    if (typeof val === 'boolean') {
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
        return temp;
    } else {
        return val;
    }
}

/*
    Use this function to display strings in sentence case which were originally in camel case
    This is used to displyaing keys like ownerInfo
*/
export function camelCaseToSentenceCase(val) {
    var result = val.replace(/([A-Z])/g, ' $1');
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}

/*
    Display the text according to the opted language
*/
export function displayLanguageText(val, lang = 'en') {
    let valArray;

    if ('texts' in val) {
        valArray = val.texts;
    }
    for (var i = 0; i < valArray.length; i++) {
        if (valArray[i].languageCode == lang) {
            return valArray[i].value;
        }
    }
    return 'NA';
}
