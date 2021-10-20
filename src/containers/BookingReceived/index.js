import React from 'react';
import {
  BookingHeader,
  CustomButton,
  CustomText,
  FlexContainer,
  Layout,
} from '../../components';
import {colors} from '../../library/constants';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const Received = ({route: {params}, navigation}) => {

  const addFlights = () => {
    firestore()
      .collection('reservas')
      .doc(auth().currentUser.uid)
      .get()
      .then(response => {
        if (response.exists) {
          var data = response.data();
          data.flights.push({
            location: params.location,
            destination: params.destination,
            date: params.startDate,
            passengers: params.passengers,
          });

          firestore()
            .collection('reservas')
            .doc(auth().currentUser.uid)
            .set(data);
        }
      })
      .catch(err => console.log('ERRORR AL AGREGAR VUELOS', err));
    navigation.navigate('MyFlights');
  };
  return (
    <Layout>
      <BookingHeader
        navigation={() => navigation.goBack()}
        from={params.location}
        to={params.destination}
        startDate={params.startDate}
        passengers={params.passengers + ' passengers'}
      />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          Your request was received.
        </CustomText>
      </FlexContainer>
      <CustomButton
        bg={colors.blue_c}
        text="Save"
        onPress={() => addFlights()}
      />
    </Layout>
  );
};
