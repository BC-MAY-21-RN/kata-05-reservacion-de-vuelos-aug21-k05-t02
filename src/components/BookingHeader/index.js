import React from 'react';
import {BackButton, FlexContainer, FlightBooked} from '..';

export const BookingHeader = ({navigation}) => {
  return (
    <FlexContainer h="25%" dir="col">
      <FlexContainer aln h="25%" jc="flex-start">
        <BackButton navigation={navigation} />
      </FlexContainer>
      <FlexContainer h="75%">
          <FlightBooked from="Beg" to="Ams"/>
      </FlexContainer>
    </FlexContainer>
  );
};
