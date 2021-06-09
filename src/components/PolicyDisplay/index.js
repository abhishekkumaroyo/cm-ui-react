import React from 'react';

import { TableDataContent, TableDataName } from '../../desktop-containers/PropertyBody/styles';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';

export default function PolicyDisplay(props) {
    if (props.type == 'generalPolicies') {
        return (
            <table>
                {props.policy.map((pol, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>
                                <div>
                                    <b>{pol.code}</b>
                                    <br />
                                </div>
                            </td>
                        </tr>
                        {Object.keys(pol).map((item, itemIndex) => (
                            <tr key={itemIndex}>
                                <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                {item == 'description' ? (
                                    <TableDataContent>{displayLanguageText(pol[item], props.language)}</TableDataContent>
                                ) : (
                                    <TableDataContent>{displayObjectValue(pol[item])}</TableDataContent>
                                )}
                            </tr>
                        ))}
                    </tbody>
                ))}
            </table>
        );
    }
    return (
        <table>
            <tbody>
                {Object.keys(props.policy).map((item, index) => (
                    <tr key={index}>
                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                        <TableDataContent>{displayObjectValue(props.policy[item])}</TableDataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
