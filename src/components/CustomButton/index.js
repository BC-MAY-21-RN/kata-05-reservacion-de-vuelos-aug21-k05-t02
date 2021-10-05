import React from 'react';
import {ButtonText} from '..';
import {ButtonContainer} from './styledComponents';

export const CustomButton = ({bg,onPress,text,disabled,...rest}) => {
 
  return (
    <ButtonContainer disabled={disabled} onPress={onPress} bg={bg}>
      <ButtonText  {...rest}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};
