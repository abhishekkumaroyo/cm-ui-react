import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase } from '../../utils/helper';

export default function PropertyInstructionsCard(props) {
    const [propertyInstructions, setPropertyInstructions] = useState([]);

    useEffect(() => {
        if (props.property.rules && props.property.rules.propertyInstructions) {
            setPropertyInstructions(props.property.rules.propertyInstructions);
        } else {
            setPropertyInstructions([]);
        }
    }, [props.property]);

    return (
        <div>
            {propertyInstructions.map((instr, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <h5 style={{ display: 'inline' }}>{index + 1}.) &emsp; </h5>
                    <div style={{ display: 'inline-grid' }}>
                        {Object.keys(instr).map((instructionKey, instructionIndex) => (
                            <div key={instructionIndex}>
                                <span>{camelCaseToSentenceCase(instructionKey)} : </span>
                                <span>{instr[instructionKey]}</span>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
