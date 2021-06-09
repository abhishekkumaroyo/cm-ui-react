import styled from 'styled-components/macro';

export const ImagesContainer = styled.div`
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    margin: 7.5px 0;
`;

export const ImageTile = styled.img`
    cursor: pointer;

    height: 100px;
    margin: 10px;
`;

export const ImageDetailsContainer = styled.div`
    background-color: white;
    margin: 7.5px 0;
`;

export const ImageSliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

export const ImageSide = styled.img`
    max-width: 100%;
`;

export const Left = styled.div`
    top: 50%;
    position: relative;
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    cursor: pointer;
    :hover {
        background-color: greenyellow;
    }
`;

export const Right = styled.div`
    top: 50%;
    position: relative;
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    cursor: pointer;
    :hover {
        background-color: greenyellow;
    }
`;

export const ImageDetailsContent = styled.div`
    padding: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
`;
