import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {FlightBooked, FloatingButton} from '../../components';
import {colors} from '../../library/constants';
import {flightListBooked} from '../../library/constants/temp';
import {LayoutFlights, ListContainer, ButtonContainer} from './styledComponent';

import auth from '@react-native-firebase/auth';
//import { firebase, firestore } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

export const MyFlights = ({navigation}) => {
  
  const [vuelos, setVuelos] = useState([]);
  const idUser = auth().currentUser.uid;

  useEffect(async() => {
    console.log("1");
    const subscriber = await firestore()
      .collection('reservas')
      .doc(idUser)
      .onSnapshot(querySnapshot => {
        if(!querySnapshot.exists) {
          console.log("No tienes vuelos");
          return;
        }
        const flights = [];
        console.log("2");
        querySnapshot._data.flights.forEach(documentSnapshot => {
          flights.push({
            ...documentSnapshot,
            key: documentSnapshot.id,
          });
        });
        const fixedFlights = flights.map(flight => {
          return {
            begin: flight.location,
            destiny: flight.destination,
            date: flight.date,
            passengers: flight.passengers
          };
        }); 
        setVuelos(fixedFlights);
        console.log("3");
        console.log(`flights: < ${JSON.stringify(vuelos)} >`);
      });
    return () => subscriber;
  }, [idUser]);
  
  console.log(vuelos);
  // console.log("Hola mundo");
  // const LoadData = async() => {
  //   try {
  //     console.log('firebase:');
  //     const user = await firestore().collection('reservas').doc('FrRKKy5wEWZJxMSBTpQnrQrzflx2').get();
  //     //const user = await firestore().collection('reservas').get();
  //     console.log(user);
  //   } catch (e) {
  //     console.log(e);
  //     console.log("algo salio mal");
  //   }
  // };

  // useEffect(() => {
  //   LoadData();
  // }, [])

  const nextScreenCast = () => navigation.navigate('Location');

  return (
    <LayoutFlights>
      <ListContainer>
        <FlatList
          data={vuelos}
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

