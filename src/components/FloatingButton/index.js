import React from 'react';
import {ContainerFloating} from './styledComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const FloatingButton = ({...props}) => {
  return (
    <ContainerFloating bg={props.bg} onPress={props.onPress} >
      <FontAwesome name="plus" size={40} color="#fff" />
    </ContainerFloating>
  );
};
