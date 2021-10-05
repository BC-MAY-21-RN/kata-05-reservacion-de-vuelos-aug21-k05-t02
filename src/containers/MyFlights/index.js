import React from 'react';
import {FlatList} from 'react-native';
import {FlightBooked, FloatingButton} from '../../components';
import { colors } from '../../library/constants';
import {flightListBooked} from '../../library/constants/temp';
import {LayoutFlights, ListContainer, ButtonContainer} from './styledComponent';

export const MyFlights = () => {
  return (
    <LayoutFlights>
      <ListContainer>
        <FlatList
          data={flightListBooked}
          renderItem={({item}) => <FlightBooked item={item} borderBottom/>}
        />
      </ListContainer>
      <ButtonContainer>
      <FloatingButton bg={colors.blue_c}/>
      </ButtonContainer>
    </LayoutFlights>
  );
};
