import styled from 'styled-components';
import {FlexContainer} from '..';

export const BokingContainer = styled(FlexContainer)`
 
  height: 120px;
  border-bottom-width: ${({borderBottom}) => (borderBottom ? '2px' : '0')};
  flex-direction: column;
`;


export const PlacesContainer =styled(FlexContainer)`
height: 60%;
border-bottom-width: 1px ;
border-color: grey;
`
export const AdditionalDataContainer =styled(FlexContainer)`
height: 40%;
`