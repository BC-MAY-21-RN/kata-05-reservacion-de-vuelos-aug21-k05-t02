import React from 'react';
import {useState} from 'react';
import {CustomInputStyle, CustomText, FlexContainer} from '..';
import {colors} from '../../library/constants';

export const BookingInput = ({
  title,
  name,
  onChangeText,
  value,
  hasErrors,
  hasTouched,
  placeholder
}) => {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (focused) {
      return colors.blue_c;
    } else {
      return colors.dark;
    }
  };

  return (
    <FlexContainer dir jc="flex-start" aln h="80px" style={[{borderBottomColor: getBorderColor()}]}>
      <CustomText mb="10px">{title}</CustomText>
      <CustomInputStyle
        placeholder={placeholder}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChangeText={onChangeText}
        value={value}
        name={name}
      />
      {hasErrors && hasTouched ? (
        <CustomText mt="10px" clr={colors.red}>{hasErrors}</CustomText>
      ) : null}
    </FlexContainer>
  );
};
