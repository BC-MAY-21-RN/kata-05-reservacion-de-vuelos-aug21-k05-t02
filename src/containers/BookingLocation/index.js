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
import {useInput} from '../../library/hooks';
export const Location = ({route: {params}, navigation}) => {
  const {value, onChangeText} = useInput('');
  const nextScreenCast = () =>
    navigation.navigate('Destination', {
      ...params,
      location: value,
    });

  return (
    <Layout>
      <BookingHeader navigation={() => navigation.goBack()} />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          Where are you now?
        </CustomText>
        <BookingInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Select location"
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
