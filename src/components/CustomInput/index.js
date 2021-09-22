import React from "react";
import { useState } from "react";
import colors from "../Colors";
import { CustomInputStyle, CustomText, FlexContainer } from "../generals";

const CustomInput = ({...props}) => {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (focused) {
      return colors.purple;
    }else{
        return colors.black;
    }
  };

  return (
    <FlexContainer dir="col" aln="flex-start" h="80px">
      <CustomText>
        {`${props.title}`}
      </CustomText>
      <CustomInputStyle
      style={[{ borderColor: getBorderColor()}]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
            setFocused(false);
          }}
      />
    </FlexContainer>
  );
};

export default CustomInput;
