import React from 'react';
import {
  BookingHeader,
  Calendar,
  CustomButton,
  CustomText,
  FlexContainer,
  Layout,
} from '../../components';
import {colors} from '../../library/constants';
import {useState} from 'react';
import { Button } from 'react-native';

export const SelectDate = ({navigation}) => {
  const nextScreenCast = type =>
    navigation.navigate('SelectPassengers', {
      type,
    });

  const [dateSelected, setDateSelected] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Layout>
      <BookingHeader navigation={() => navigation.goBack()}/>
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="30px" fw="bold">
          Select date
        </CustomText>
        <Calendar
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
        />
      </FlexContainer>
      <CustomButton
        bg={colors.blue_c}
        text="Next"
        onPress={() => nextScreenCast()}
      />
    </Layout>
  );
};
