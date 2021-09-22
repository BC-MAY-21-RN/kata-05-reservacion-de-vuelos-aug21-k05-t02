import React from "react";
import { Layout, FlexContainer } from "..";
import CustomInput from "../CustomInput";
import { ScrollCustom } from "../generals";


export const HomeScreen = () => {
  return (
    <Layout>
      <FlexContainer w="100%" dir="col" h="60%" aln="center">
          <CustomInput title="First Name" />
          <CustomInput title="Email*" />
          <CustomInput title="Password*" />
      </FlexContainer>
    </Layout>
  );
};

