import React from 'react';
import {CustomText} from '../generals';
import {ButtonContainer} from './styledComponents';

const CustomButton = ({...props}) => {
  return (
    <ButtonContainer bg={props.bg}>
      <CustomText fs={props.fs} fw={props.fw} clr={props.clr}>
        {props.text}
      </CustomText>
    </ButtonContainer>
  );
};

export default CustomButton;
