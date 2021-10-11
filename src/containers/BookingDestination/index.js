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

export const Destination = ({route: {params}, navigation}) => {

  const {value, onChangeText} = useInput('');
  const nextScreenCast = () => navigation.navigate('SelectDate', {
    ...params,
    destination:value
  });
  return (
    <Layout>
      <BookingHeader
        navigation={() => navigation.goBack()}
        from={params.location}
      />
      <FlexContainer aln h="60%" jc="flex-start" dir>
        <CustomText fs="35px" fw="bold">
          Where will you be flying to?
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
