import React from 'react';
import { FlatList } from 'react-native';
import { MainContainer } from '../../components/generals';
import { ContainerFlights, TitleFlights } from './styledComponent';
import { Flights } from '../../data/data'; 
import { BlockFlights } from '../../components/blockFlights';
import { FloatingB } from '../../components/floatingB'
const MyFlights = () => {
    return(
        <MainContainer>
            <TitleFlights> My flights </TitleFlights>
            <ContainerFlights>
                <FlatList
                    data={Flights}
                    renderItem={ ({ item }) => (
                        <BlockFlights
                            item = { item }
                        />
                    )}
                />
            </ContainerFlights>
            <FloatingB />
        </MainContainer>
    );
};

export default MyFlights;
