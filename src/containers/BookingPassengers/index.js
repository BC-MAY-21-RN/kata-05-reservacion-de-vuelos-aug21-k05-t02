import React from 'react';
import {
  BookingHeader,
  Counter,
  CustomButton,
  CustomText,
  FlexContainer,
  Layout,
} from '../../components';
import {colors} from '../../library/constants';
import {useState} from 'react';

export const SelectPassengers = ({route: {params}, navigation}) => {
  const [passengersCount, setpassengersCount] = useState(1);

  const nextScreenCast = () =>
    navigation.navigate('Received', {
      ...params,
      passengers: passengersCount,
    });

  return (
    <Layout>
      <BookingHeader 
      navigation={() => navigation.goBack()} 
      from={params.location}
      to={params.destination}
      startDate={params.startDate}
      />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          How many passengers?
        </CustomText>
        <Counter count={passengersCount} setCount={setpassengersCount} />
      </FlexContainer>
      <CustomButton
        bg={colors.blue_c}
        text="Next"
        onPress={() => nextScreenCast()}
      />
    </Layout>
  );
};
