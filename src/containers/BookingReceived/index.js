import React from 'react';
import {
  BookingHeader,
  CustomButton,
  CustomText,
  FlexContainer,
  Layout,
} from '../../components';
import {colors} from '../../library/constants';

export const Received = ({route: {params}, navigation}) => {
  const nextScreenCast = () =>
    navigation.navigate('MyFlights', {
      ...params,
    });
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
        onPress={() => nextScreenCast()}
      />
    </Layout>
  );
};
