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

export const Location = ({navigation}) => {
  const nextScreenCast = type =>
    navigation.navigate('Destination', {
      type,
    });

  return (
    <Layout>
      <BookingHeader navigation={() => navigation.goBack()} />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          Where are you now?
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
