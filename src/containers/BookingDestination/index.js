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

export const Destination = ({navigation}) => {
  const nextScreenCast = type =>
    navigation.navigate('SelectDate', {
      type,
    });

  return (
    <Layout>
      <BookingHeader navigation={() => navigation.goBack()} />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          Where will you be flying to?
        </CustomText>
        <BookingInput placeholder="Select location" />
      </FlexContainer>
      <CustomButton
        bg={colors.blue_c}
        text="Next"
        onPress={() => nextScreenCast()}
      />
    </Layout>
  );
};
