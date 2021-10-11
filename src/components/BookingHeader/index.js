import React from 'react';
import {BackButton, FlexContainer, FlightBooked} from '..';

export const BookingHeader = ({...props}) => {
  return (
    <FlexContainer h="25%" dir="col">
      <FlexContainer aln h="25%" jc="flex-start">
        <BackButton navigation={props.navigation} />
      </FlexContainer>
      <FlexContainer h="75%">
          <FlightBooked from={props.from} to={props.to} date={props.startDate} />
      </FlexContainer>
    </FlexContainer>
  );
};
