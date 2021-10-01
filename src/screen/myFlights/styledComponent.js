import styled from "styled-components";
import { MainContainer } from "../../components/generals";
import { Colors } from "../../components/colors";

export const ContainerFlights = styled(MainContainer)`
    margin-top: 6%;
    margin-left: 6%;
    margin-right: 6%;
`;

export const TitleFlights = styled.Text`
    font-size: 40px;
    font-weight: 700;
    margin-vertical: 1%;
    color: ${Colors.blue_c};
`;
