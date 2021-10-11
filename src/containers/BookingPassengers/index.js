import React from 'react';
import {
  BookingHeader,
  BookingInput,
  CustomButton,
  CustomText,
  FlexContainer,
  Layout,
} from '../../components';
import {colors} from '../../library/constants';

export const SelectPassengers = ({route: {params}, navigation}) => {
  
  const nextScreenCast = () =>
    navigation.navigate('Received', {
      ...params,

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
      </FlexContainer>
      <CustomButton
        bg={colors.blue_c}
        text="Next"
        onPress={() => nextScreenCast()}
      />
    </Layout>
  );
};
