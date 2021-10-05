import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackList} from '../library/constants';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {stackList.map(navItem => (
        <Stack.Screen key={navItem.name} {...navItem} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;