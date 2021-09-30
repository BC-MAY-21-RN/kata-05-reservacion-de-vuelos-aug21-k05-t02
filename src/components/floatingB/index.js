import React from 'react';
import { ContainerFloating } from './styledComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export const FloatingB = () => {
    return(
        <ContainerFloating>
            <FontAwesome 
                name='plus' 
                size={40} 
                color='#fff' 
            />
        </ContainerFloating>
    );
};
