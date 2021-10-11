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

export const SelectDate = ({route: {params}, navigation}) => {

  const nextScreenCast = () => navigation.navigate('SelectPassengers', {
    ...params,
    startDate: dateSelected.startDate.toString(),
    endDate: dateSelected.endDate.toString(),
  });

  const [dateSelected, setDateSelected] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Layout>
      <BookingHeader
        navigation={() => navigation.goBack()}
        from={params.location}
        to={params.destination}
      />
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
        disabled={!dateSelected.startDate || !dateSelected.endDate}
      />
    </Layout>
  );
};
