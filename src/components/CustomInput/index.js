import React from 'react';
import {useState} from 'react';
import {CustomInputStyle, CustomText, FlexContainer} from '..';
import {colors} from '../../library/constants';

export const CustomInput = ({
  title,
  name,
  onChangeText,
  value,
  hasErrors,
  hasTouched,
  secureTextEntry,
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
    <FlexContainer dir jc="flex-start" aln h="100px">
      <CustomText mb="10px">{title}</CustomText>
      <CustomInputStyle
        border
        style={[{borderColor: getBorderColor()}]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChangeText={onChangeText}
        value={value}
        name={name}
        secureTextEntry={secureTextEntry}
      />
      {hasErrors && hasTouched ? (
        <CustomText mt="10px" clr={colors.red}>
          {hasErrors}
        </CustomText>
      ) : null}
    </FlexContainer>
  );
};
