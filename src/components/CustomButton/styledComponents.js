import styled from 'styled-components';
import { colors } from '../../library/constants';

export const ButtonContainer = styled.Pressable`
  height: 50px;
  width: ${({w}) => w ?? '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg,disabled}) =>disabled? colors.gray: bg ?? 'white'};
  border-radius: 10px;
  border: 1px solid ${colors.blue_c};
`;
