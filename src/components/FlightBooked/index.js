import React from 'react';
import {CustomText, FlexContainer} from '..';
import { colors } from '../../library/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  AdditionalDataContainer,
  BokingContainer,
  PlacesContainer,
} from './styledComponent';
export const FlightBooked = ({...props}) => {
  return (
    <BokingContainer borderBottom={props.borderBot}>
      <PlacesContainer>
        <FlexContainer w="33%" dir>
          <FlexContainer h="60%" jc="flex-start">
            <CustomText fs="30px" fw="bold">{props.from}</CustomText>
          </FlexContainer>
          <FlexContainer h="60%" jc="flex-start">
            <CustomText fs="16px" clr={colors.gray}>serbia</CustomText>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer w="33%">
        <FontAwesome name="plane" size={25} color="#647CF6" />
        </FlexContainer>
        <FlexContainer w="33%" dir>
          <FlexContainer h="60%" jc="flex-end">
            <CustomText fs="30px" fw="bold">{props.to}</CustomText>
          </FlexContainer>
          <FlexContainer h="60%" jc="flex-end">
            <CustomText fs="16px" clr={colors.gray}>nethers</CustomText>
          </FlexContainer>
        </FlexContainer>
      </PlacesContainer>
      <AdditionalDataContainer>
        <FlexContainer w="50%" jc="flex-start">
          <CustomText fs="14px" fw="bold">september 3, 2020</CustomText>
        </FlexContainer>
        <FlexContainer w="50%" jc="flex-end">
          <CustomText fs="14px" fw="bold">2 Passengers</CustomText>
        </FlexContainer>
      </AdditionalDataContainer>
    </BokingContainer>
  );
};
