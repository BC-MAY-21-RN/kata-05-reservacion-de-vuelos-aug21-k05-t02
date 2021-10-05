import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ScrollCustom = styled.ScrollView`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;
export const FlexContainer = styled.View`
  background-color:${({bg}) => bg ?? 'transparent'};
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
  display: flex;
  align-items: ${({aln}) => (aln ? 'flex-start' : 'center')};
  justify-content: ${({jc}) => jc ?? 'space-around'};
  flex-direction: ${({dir}) => (dir ? 'column' : 'row')};
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({borderBot}) => borderBot ?? 'transparent'};
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? 'black'};
  font-size: ${({fs}) => fs ?? '12px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
  margin-bottom: ${({mb})=>mb??'0px'};
  margin-top: ${({mt})=>mt??'0px'};
`;

export const ButtonText = styled.Text`
  color: ${({clr}) => clr ?? 'white'};
  font-size: ${({fs}) => fs ?? '20px'};
  font-weight: ${({fw}) => fw ?? 'bold'};
`;

export const CustomInputStyle = styled.TextInput`
  background-color: white;
  height: 50px;
  width: 100%;
  padding: 10px;
  border: ${({border}) => (border ? '1px' : '0')};
`;
export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  height: 90%;
  background-color: blue;
  width: 100%;
`;
