import React from 'react';
import {CustomButton, CustomText, FlexContainer} from '..';
import {colors} from '../../library/constants';

export const Counter = ({count, setCount}) => {
  const handleIncrement = () => {
    setCount(count < 10 ? prevCount => prevCount + 1 : count);
  };

  const handleDecrement = () => {
    setCount(count > 1 ? prevCount => prevCount - 1 : count);
  };
  return (
    <FlexContainer h="60%">
      <CustomButton
        w="20%"
        fs="35px"
        bg={colors.blue_c}
        text="-"
        onPress={handleDecrement}
      />
      <CustomText fs="30px" fw="bold">
        {count}
      </CustomText>
      <CustomButton
        w="20%"
        fs="30px"
        bg={colors.blue_c}
        text="+"
        onPress={handleIncrement}
      />
    </FlexContainer>
  );
};
