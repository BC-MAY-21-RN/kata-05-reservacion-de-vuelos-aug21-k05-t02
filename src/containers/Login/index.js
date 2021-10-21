import React, {useState}from 'react';
import {
  Layout,
  FlexContainer,
  CustomText,
  CustomInput,
  CustomButton,
} from '../../components';
import {colors, logInSchema} from '../../library/constants';
import {Formik} from 'formik';
import { login } from '../../library/methods';
//import { verifyAuth } from '../../library/hooks/verifyAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SpinnerModal } from '../../components/SpinnerModal';


export const Login = ({navigation}) => {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const handleLogIn = async values => {
    const {email, password} = values;
    setStatus('loading');
    await login(email, password, navigation)
    .then(() => setStatus(false))
    .catch(() => setStatus(true))  
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
          email: 'luis@gmail.com',
          password: 'Luis123*',
        }}
        validationSchema={logInSchema}
        onSubmit={values => handleLogIn(values)}>
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
                secureTextEntry={true}
              />
              <CustomText clr={colors.gray}>
                Use 8 or more characters with a mix of letters, numbers and
                symbols
              </CustomText>
            </FlexContainer>
            <FlexContainer h="45%" dir="col">
              <CustomButton
                bg={colors.blue_c}
                onPress={handleSubmit}
                text="Login"
                loading={loading}
                disabled={errors.email}
              />
              <CustomText clr={colors.gray} fs="16px">
                or
              </CustomText>
              <CustomButton
                bg={colors.blue_c}
                onPress={handleSubmit}
                text="Login With Google"
                disabled={errors.email}
              />
              <CustomText clr={colors.gray} fs="16px">
                Already have an account?
                <CustomText 
                  clr={colors.blue}
                  fs="16px"
                  onPress={()=>{
                    navigation.navigate('SignIn');
                  }}
                >
                  SignUp
                </CustomText>
              </CustomText>
            </FlexContainer>
          </Layout>
        )}
      </Formik>
    </SafeAreaView>
    
  );
};



