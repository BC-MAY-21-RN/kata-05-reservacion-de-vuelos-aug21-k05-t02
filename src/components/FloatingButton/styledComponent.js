import styled from 'styled-components/native';
import { FlexContainer } from '..';

export  const ButtonContainer =styled(FlexContainer)`
  height: 10%;
  background-color: white;
`

export const ContainerFloating = styled.Pressable`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px; 
  background-color: ${({bg}) => bg ?? 'transparent'};
`;
