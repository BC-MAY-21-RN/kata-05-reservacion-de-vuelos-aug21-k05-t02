import React from 'react';
import {FlatList} from 'react-native';
import {FlightBooked, FloatingButton} from '../../components';
import {colors} from '../../library/constants';
import {flightListBooked} from '../../library/constants/temp';
import {LayoutFlights, ListContainer, ButtonContainer} from './styledComponent';

export const MyFlights = ({navigation}) => {
  const nextScreenCast = () =>
    navigation.navigate('Location');

  return (
    <LayoutFlights>
      <ListContainer>
        <FlatList
          data={flightListBooked}
          renderItem={({item}) => (
            <FlightBooked
              from={item.begin}
              to={item.destiny}
              date={item.date}
              passengers={item.passengers}
              borderBottom
            />
          )}
        />
      </ListContainer>
      <ButtonContainer>
        <FloatingButton 
        bg={colors.blue_c} 
        onPress={() => nextScreenCast()}
        />
      </ButtonContainer>
    </LayoutFlights>
  );
};
