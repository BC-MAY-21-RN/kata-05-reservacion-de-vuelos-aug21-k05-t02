import React from 'react';
import { Beg, Container, Title, Country, Border,Ams, LogoFlights } from './styledComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const BlockFlights = ({ item }) => {
    return(
        <Container>
            <Beg>
                <Title>BEG</Title>
                <Country>{item.begin}</Country>
                <Border></Border>
                <Country>{item.date}</Country>
                <LogoFlights>
                    <FontAwesome 
                        name='plane' 
                        size={25} 
                        color='#647CF6' 
                    />
                </LogoFlights>
            </Beg>
            <Ams>
            <Title>AMS</Title>
                <Country>{item.destiny}</Country>
                <Border></Border>
                <Country>{item.passengers}</Country>
            </Ams>
        </Container>
    );
};
