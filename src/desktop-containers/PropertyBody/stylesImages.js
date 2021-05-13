import styled from 'styled-components/macro';

export const ImagesColumn = styled.div`
    padding: 0px 7.5px;
    position: relative;
    min-height: 1px;

    @media (min-width: 992px) {
        width: 50%;
        float: left;
    }
`;

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
    /* display: flex;
    justify-content: center;
    align-items: center; */
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

export const Row = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    //overflow-y: scroll;
`;

export const RowLeft = styled.div`
    flex: 1;
`;

export const RowRight = styled.div`
    flex: 4;
    word-break: break-all;
`;

export const ButtonContainer = styled.div`
    display: flex;
`;
