import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('*');

import { PropertyColumn, TableDataContent, TableDataName } from '../../desktop-containers/PropertyBody/styles';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';
import { LeftArrowIcon, RightArrowIcon } from '../Icons/icons';
import PropertyCard from '../PropertyCard';

import { ImagesContainer, ImageTile, ImageSliderContainer, Left, ImageSide, Right, ImageDetailsContent, ButtonContainer } from './styles';

function ImagesModal(props) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80%',
            maxWidth: '80%'
        }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [pictures, setPictures] = React.useState([]);
    const [picIndex, setIndex] = React.useState(0);
    const [numberOfImages, setNumberOfImages] = React.useState(0);

    React.useEffect(() => {
        if (props.propertyImages) {
            setPictures(props.propertyImages);
            setNumberOfImages(props.propertyImages.length);
        }
    }, [props.propertyImages]);

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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <button onClick={closeModal} style={{ position: 'fixed', top: '0', right: '0' }}>
                    close
                </button>
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
                </PropertyColumn>
            </Modal>
        </div>
    );
}

export default ImagesModal;
