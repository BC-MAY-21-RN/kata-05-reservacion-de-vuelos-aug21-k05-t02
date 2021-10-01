import React from 'react';
import { ButtonContainer, Content, DataBox, Headboard, MainContainerBooking } from './styledComponent';
import { Colors } from '../colors';
import CustomButton from '../CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const BookingContainer = () => {
    return(
        <MainContainerBooking>
            <Headboard>
                <FontAwesome 
                    name='arrow-left' 
                    size={25} 
                    color='#647CF6' 
                />
            </Headboard>
            <DataBox></DataBox>
            <Content></Content>
            <ButtonContainer>
                <CustomButton 
                    fs="20px"
                    fw="bold"
                    bg={Colors.gray}
                    text="Next"
                    clr="#FFFFFF"
                />
            </ButtonContainer>
        </MainContainerBooking>
    );
};
