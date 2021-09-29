import styled from "styled-components";
import { Colors } from "../colors";

export const ContainerFloating = styled.Pressable`
    height: 10%;
    width: 20%;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    top: 88%;
    left: 40%;
    background-color: ${Colors.blue_c};
`;