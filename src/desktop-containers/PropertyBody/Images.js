import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { LeftArrowIcon, RightArrowIcon } from '../../components/Icons/icons';
import PropertyCard from '../../components/PropertyCard';
import { ImagesContainer, ImageTile, ImageSliderContainer, Left, ImageSide, Right, ImageDetailsContent, ButtonContainer } from './stylesImages';

import { TableDataName, TableDataContent, PropertyColumn } from './styles';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';
import PropertyHeader from '../../components/PropertyHeader';

export default function Images(props) {
    const [pictures, setPictures] = useState([]);
    const [picIndex, setIndex] = useState(0);
    const [numberOfImages, setNumberOfImages] = useState(0);

    useEffect(() => {
        if (props.propertySearch.property && props.propertySearch.property.images) {
            setPictures(props.propertySearch.property.images);
            setNumberOfImages(props.propertySearch.property.images.length);
        }
    });

    const onRightClick = () => {
        setIndex((picIndex + 1) % numberOfImages);
    };

    const imageClick = (index) => {
        setIndex(index);
    };

    const onLeftClick = () => {
        let temp = picIndex - 1;
        if (temp < 0) {
            setIndex(numberOfImages - 1);
        } else {
            setIndex(picIndex - 1);
        }
    };

    if (!props.propertySearch.property) {
        return <PropertyCard title="Property Images">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
            <PropertyHeader
                title="Images"
                language={props.language}
                id={props.propertySearch.property.externalPropertyId}
                propertyLanguages={props.propertySearch.property.languageCodes}></PropertyHeader>

            <PropertyColumn>
                {pictures[picIndex] ? (
                    <PropertyCard title="Image Details">
                        <ImageSliderContainer>
                            <div>
                                <Left onClick={onLeftClick}>
                                    <LeftArrowIcon />
                                </Left>
                            </div>
                            <div>
                                <ImageSide src={pictures[picIndex].url} />
                            </div>
                            <div>
                                <Right onClick={onRightClick}>
                                    <RightArrowIcon />
                                </Right>
                            </div>
                        </ImageSliderContainer>
                        <ImageDetailsContent>
                            <table>
                                <tbody>
                                    {Object.keys(pictures[picIndex]).map((item, index) => (
                                        <tr key={index}>
                                            <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                            <TableDataContent>{displayObjectValue(pictures[picIndex][item])}</TableDataContent>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </ImageDetailsContent>
                    </PropertyCard>
                ) : (
                    <PropertyCard title="Property Images">No Images found</PropertyCard>
                )}
            </PropertyColumn>

            <PropertyColumn>
                <PropertyCard title="Image Gallary">
                    <ImagesContainer>
                        <h4>Total Images: {numberOfImages}</h4>
                        <div>
                            {pictures.map((pic, index) => (
                                <ImageTile
                                    key={index}
                                    src={pic.url}
                                    onClick={() => {
                                        imageClick(index);
                                    }}
                                />
                            ))}
                        </div>
                    </ImagesContainer>
                </PropertyCard>

                <PropertyCard title="Add or Remove Image">
                    <ButtonContainer>
                        <Button message="Add an Image" type="white"></Button>
                        <Button message="Remove an Image"></Button>
                    </ButtonContainer>
                </PropertyCard>
            </PropertyColumn>
        </div>
    );
}
