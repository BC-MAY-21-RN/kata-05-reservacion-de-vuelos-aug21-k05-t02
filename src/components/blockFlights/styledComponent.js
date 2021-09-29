import styled from "styled-components";
import { Colors } from "../colors";

export const Container = styled.View`
    display: flex;
    flex: 1;
    height: 120px;
    margin-vertical: 7px;
    flex-direction: row;
    border-bottom-width: 1px;
    borderColor: ${Colors.dark};
    borderStyle: solid;
`;

export const Beg = styled.View`
    height: 100%;
    width: 50%;
    flex-direction: column;
`;
export const Title = styled.Text`
    font-size: 28px;
    font-weight: 700;
    color: ${Colors.dark};
`;
export const Country = styled.Text`
    font-size: 15px;
    font-weight: 300;
    color: ${Colors.dark};
`;
export const Border = styled.View`
    width: 100%;
    margin-top: 6px;
    margin-bottom: 11px;
    border-bottom-width: 2px;
    borderColor: ${Colors.gray};
    borderStyle: solid;
`;
export const Ams = styled.View`
    height: 100%;
    width: 50%;
    flex-direction: column;
    align-items: flex-end;
`;
export const LogoFlights = styled.View`
    position: absolute;
    width: 12%;
    height: 20%;
    left: 92%;
    top: 6%;
`;