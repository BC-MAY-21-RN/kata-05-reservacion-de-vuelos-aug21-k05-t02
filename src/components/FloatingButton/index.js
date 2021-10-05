import React from 'react';
import {ContainerFloating} from './styledComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const FloatingButton = ({...props}) => {
  return (
    <ContainerFloating bg={props.bg}>
      <FontAwesome name="plus" size={40} color="#fff" />
    </ContainerFloating>
  );
};
