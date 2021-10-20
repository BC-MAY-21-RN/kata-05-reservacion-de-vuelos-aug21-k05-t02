import React, {useState} from 'react';
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
import {onGoogleButtonPress} from '../../library/methods/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SpinnerModal } from '../../components/SpinnerModal';
import { createAditionalData } from '../../library/hooks/useGoogleConfig';

export const SignIn = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSignIn = values => {
    const {email, password, username} = values;
    setStatus('loading');
    register(email, password, username)
      .then(() => {
        setStatus('signedUp');
      })
      .catch(() => {
        setStatus('false');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView>
      {status === 'loading' && <SpinnerModal status={'loading'} />}
      {status === 'signedUp' && (
        <SpinnerModal
          status={'signedUp'}
          navigation={navigation}
          setStatus={setStatus}
        />
      )}
        <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={values => handleSignIn(values, navigation)}>
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
                secureTextEntry={true}
              />
            </FlexContainer>
            <FlexContainer h="45%" dir="col">
              <CheckBox text="I agree to the Terms and Privacy Policy *" />
              <CheckBox text="Subscribe for select product updates." />
              <CustomButton
                onPress={handleSubmit}
                text="Sign Up"
                bg={colors.blue_c}
                loading={loading}
                disabled={errors.email}
              />
              <CustomText clr={colors.gray} fs="16px">
                or
              </CustomText>
              <CustomButton
                onPress={() => onGoogleButtonPress(navigation)}
                text="Sign Up With Google"
                bg={colors.blue_c}
                disabled={errors.email}
              />
              <CustomText clr={colors.gray} fs="16px">
                Don't you have an account? 
                <CustomText 
                  clr={colors.blue}
                  fs="16px"
                  onPress={()=>{
                    navigation.navigate('Login');
                  }}
                >
                  Login
                </CustomText>
              </CustomText>
            </FlexContainer>
          </Layout>
        )}
      </Formik>
    </SafeAreaView>
  );
};
