import React, { useEffect, useState } from 'react';
import ImagesModal from '../ImagesModal';

import { StyledImage } from './styles';

export default function PropertyImagesCard(props) {
    const [propertyImages, setPropertyImages] = useState([]);

    useEffect(() => {
        if (props.property.images) {
            setPropertyImages(props.property.images);
        } else {
            setPropertyImages([]);
        }
    }, [props.property]);

    return (
        <div>
            {propertyImages.map((item, index) => (
                <span key={index}>
                    <StyledImage src={item.url} />
                </span>
            ))}
            <ImagesModal propertyImages={propertyImages} />
        </div>
    );
}