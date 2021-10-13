import React from 'react';
import { ModalBackground, ModalContainer, ModalIcon, ModalText, Spinner } from './styledComponent';
import { ActivityIndicator, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../library/constants';
export const SpinnerModal = ({ status, navigation, setStatus }) => {
  if (status === 'loading') {
    return(
      status === 'loading' && (
        <ModalContainer>
          <ModalBackground>
            <ActivityIndicator
              size="large"
              color={colors.blue_c}
            >
              <Spinner/>
            </ActivityIndicator>
            <ModalText>
              <Text>Checking</Text>
            </ModalText>
          </ModalBackground>
        </ModalContainer>
      )
    );
  } else if (status === 'signedUp'){
    setTimeout(() => {
      setStatus(false);
      navigation.navigate('MyFlights');
    }, 3000);

    return(
      status === 'signedUp' && (
        <ModalContainer>
          <ModalBackground>
            <ModalIcon>
              <Icon 
                name="check-circle-outline"
              />
            </ModalIcon>
            <ModalText>
              <Text>signingUp</Text>
            </ModalText>
          </ModalBackground>
        </ModalContainer>
      )
    );
  }
};
