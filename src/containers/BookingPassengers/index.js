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

export const SelectPassengers = ({navigation}) => {
  const nextScreenCast = type =>
    navigation.navigate('Received', {
      type,
    });

  return (
    <Layout>
      <BookingHeader navigation={() => navigation.goBack()} />
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
