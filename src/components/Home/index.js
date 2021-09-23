import React from 'react';
import {Layout, FlexContainer} from '..';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

export const HomeScreen = () => {
  return (
    <Layout>
      <FlexContainer w="100%" dir="col" h="60%" aln="center">
        <CustomInput title="First Name" />
        <CustomInput title="Email*" />
        <CustomInput title="Password*" />
      </FlexContainer>
      <FlexContainer h="40%">
        <CustomButton
          fs="20px"
          fw="bold"
          bg="#647CF6"
          text="Sign Up"
          clr="#FFFFFF"
        />
      </FlexContainer>
    </Layout>
  );
};
