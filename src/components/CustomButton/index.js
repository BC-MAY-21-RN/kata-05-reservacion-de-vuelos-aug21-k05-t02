import React from 'react';
import {ButtonText} from '..';
import {ButtonContainer} from './styledComponents';

export const CustomButton = ({fs,w,bg,onPress,text,disabled,...rest}) => {
 
  return (
    <ButtonContainer disabled={disabled} onPress={onPress} bg={bg} w={w}>
      <ButtonText  {...rest} fs={fs}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};
