import React from 'react';
import {ContainerFloating} from './styledComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../library/constants';

export const BackButton = ({navigation}) => {
  return (
    <ContainerFloating onPress={navigation}>
      <FontAwesome name="angle-left" size={40} color={colors.blue_c} />
    </ContainerFloating>
  );
};
