import React, { useState } from 'react';

import Button from '../Button';
import { InputContainer, PromotionsForm, InputLabel } from './styles';

function PromotionsSearch() {
    const [hotelId, setHotelId] = useState('');
    const [otaId, setOtaId] = useState('');
    const [active, setActive] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        console.log(hotelId);
        console.log(otaId);
        console.log(active);
    };

    const onHotelChange = (e) => {
        setHotelId(e.target.value);
    };

    const onOtaChange = (e) => {
        setOtaId(e.target.value);
    };

    const onActiveChange = (e) => {
        setActive(e.target.value);
    };

    return (
        <div>
            <PromotionsForm>
                <InputContainer>
                    {/* <InputLabel htmlFor="hotelId">Hotel Id</InputLabel> */}
                    <input type="text" placeholder="hotel id" id="hotelId" onChange={onHotelChange} />
                </InputContainer>
                <InputContainer>
                    {/* <InputLabel htmlFor="otaId">OTA Id</InputLabel> */}
                    <input type="text" placeholder="ota id" id="otaId" onChange={onOtaChange} />
                </InputContainer>
                <InputContainer>
                    {/* <InputLabel htmlFor="activeId">Active</InputLabel> */}
                    <input type="text" placeholder="TRUE / FALSE" id="activeId" onChange={onActiveChange} />
                </InputContainer>
                <InputContainer>
                    <Button onButtonClick={onFormSubmit} message="Search" type="blue" />
                </InputContainer>
            </PromotionsForm>
        </div>
    );
}

export default PromotionsSearch;
