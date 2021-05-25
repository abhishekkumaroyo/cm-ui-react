import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { LeftArrowIcon, RightArrowIcon } from '../../components/Icons/icons';
import PropertyCard from '../../components/PropertyCard';
import {
    ImagesColumn,
    ImagesContainer,
    ImageTile,
    ImageDetailsContainer,
    ImageSliderContainer,
    Left,
    ImageSide,
    Right,
    ImageDetailsContent,
    DataName,
    DataContent,
    Row,
    RowLeft,
    RowRight,
    ButtonContainer
} from './stylesImages';

import { TableDataName, TableDataContent } from './styles';
//import { BasicDetailsColumn } from './stylesBasicDetails';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';

export default function Images(props) {
    const [pictures, setPictures] = useState([]);
    const [picIndex, setIndex] = useState(0);
    const [numberOfImages, setNumberOfImages] = useState(0);

    useEffect(() => {
        console.log('test1');
        if (props.propertySearch.property && props.propertySearch.property.images) {
            setPictures(props.propertySearch.property.images);
            setNumberOfImages(props.propertySearch.property.images.length);
            console.log(numberOfImages);
            console.log('tes21');
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
        return (
            <ImagesColumn>
                <PropertyCard title="Property Images">Enter correct property id</PropertyCard>
            </ImagesColumn>
        );
    }

    return (
        <div>
            <ImagesColumn>
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
                            {/* <Row>
                                <RowLeft>Description</RowLeft>
                                <RowRight>{pictures[picIndex].description ? `${pictures[picIndex].description}` : 'NA'}</RowRight>
                            </Row>
                            <Row>
                                <RowLeft>Tags</RowLeft>
                                <RowRight>{pictures[picIndex].tags ? `${pictures[picIndex].tags.map((tag, index) => tag)}` : 'NA'}</RowRight>
                            </Row>
                            <Row>
                                <RowLeft>Status</RowLeft>
                                <RowRight>{pictures[picIndex].status ? `${pictures[picIndex].status}` : 'NA'}</RowRight>
                            </Row>
                            <Row>
                                <RowLeft>Primary</RowLeft>
                                <RowRight>
                                    {Object.prototype.hasOwnProperty.call(pictures[picIndex], 'isPrimary') ? `${pictures[picIndex].isPrimary}` : 'NA'}
                                </RowRight>
                            </Row>
                            <Row>
                                <RowLeft>Priority</RowLeft>
                                <RowRight>
                                    {Object.prototype.hasOwnProperty.call(pictures[picIndex], 'priority') ? `${pictures[picIndex].priority}` : 'NA'}
                                </RowRight>
                            </Row>
                            <Row>
                                <RowLeft>URL</RowLeft>
                                <RowRight>{pictures[picIndex].url ? `${pictures[picIndex].url}` : 'NA'}</RowRight>
                            </Row>
                            <Row>
                                <RowLeft>UUID</RowLeft>
                                <RowRight>{pictures[picIndex].uuid ? `${pictures[picIndex].uuid}` : 'NA'}</RowRight>
                            </Row> */}
                        </ImageDetailsContent>
                    </PropertyCard>
                ) : (
                    <PropertyCard title="Property Images">No Images found</PropertyCard>
                )}
            </ImagesColumn>
            <ImagesColumn>
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
            </ImagesColumn>
        </div>
    );
}
