import styled from 'styled-components';

export const ButtonContainer = styled.Pressable`
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg}) => bg ?? 'white'};
  border-radius: 10px;
`;
