import React from 'react';
import {
  Layout,
  FlexContainer,
  CustomText,
  CustomInput,
  CustomButton,
} from '../../components';
import {colors, logInSchema} from '../../library/constants';
import {Formik} from 'formik';

export const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={logInSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <FlexContainer w="100%" dir="col" h="50%" aln="center">
            <CustomText clr={colors.blue_c} fs="24px" fw="bold">
              Login
            </CustomText>
            <CustomInput
              title="Email*"
              name="email*"
              onChangeText={handleChange('email')}
              value={values.email}
              hasErrors={errors.email}
              hasTouched={touched.email}
            />
            <CustomInput
              title="Password*"
              name="password"
              onChangeText={handleChange('password')}
              value={values.password}
              hasErrors={errors.password}
              hasTouched={touched.password}
            />
            <CustomText clr={colors.gray}>
              Use 8 or more characters with a mix of letters, numbers and
              symbols
            </CustomText>
          </FlexContainer>
          <FlexContainer h="45%" dir="col">
            <CustomButton
              clr={colors.blue_c}
              onPress={handleSubmit}
              text="Login"
            />
            <CustomText clr={colors.gray} fs="16px">
              or
            </CustomText>
            <CustomButton
              clr={colors.blue_c}
              onPress={handleSubmit}
              text="Login With Google"
            />
            <CustomText clr={colors.gray} fs="16px">
              Already have an account? Login
            </CustomText>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
