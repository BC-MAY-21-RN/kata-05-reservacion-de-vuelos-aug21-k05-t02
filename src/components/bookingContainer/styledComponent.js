import styled from "styled-components";

import { Colors } from "../colors";
import { MainContainer } from "../generals";


export const MainContainerBooking = styled(MainContainer)`
    flex-direction: column;
    padding: 5px;
`;

export const Headboard = styled.View`
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 5%;
    padding-left: 15px;
`;

export const DataBox = styled.View`
    width: 100%;
    height: 20%;
`;

export const Content = styled.View`
    width: 100%;
    height: 55%;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;
