import React from 'react';
import {
  Layout,
  FlexContainer,
  CustomText,
  CustomInput,
  CheckBox,
  CustomButton,
} from '../../components';
import {colors} from '../../library/constants';
import {Formik} from 'formik';
import {signUpSchema} from '../../library/constants/validationSchema';
import {register} from '../../library/methods';
import {useNavigation} from '@react-navigation/native';
import {onGoogleButtonPress} from '../../library/methods/auth';
export const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={values => register(values, navigation)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <FlexContainer w="100%" dir="col" h="50%" aln="center">
            <CustomText clr={colors.blue_c} fs="24px" fw="bold">
              Sign Up
            </CustomText>
            <CustomInput
              title="Username"
              name="username"
              onChangeText={handleChange('username')}
              value={values.username}
              hasErrors={errors.username}
              hasTouched={touched.username}
            />
            <CustomInput
              title="Email*"
              name="email"
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
          </FlexContainer>
          <FlexContainer h="45%" dir="col">
            <CheckBox text="I agree to the Terms and Privacy Policy *" />
            <CheckBox text="Subscribe for select product updates." />
            <CustomButton
              onPress={handleSubmit}
              text="Sign Up"
              bg={colors.blue_c}
            />
            <CustomText clr={colors.gray} fs="16px">
              or
            </CustomText>
            <CustomButton
              onPress={() => onGoogleButtonPress(navigation)}
              text="Sign Up With Google"
              bg={colors.blue_c}
            />
            <CustomText clr={colors.gray} fs="16px">
              Don't you have an account? Sign In
            </CustomText>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
