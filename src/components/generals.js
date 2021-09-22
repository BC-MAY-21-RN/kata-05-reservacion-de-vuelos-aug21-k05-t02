import styled from "styled-components/native";

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
  border: blue;
  width: 100%;
`;

export const FlexContainer = styled.View`
  ${({ bg }) => bg && "background-color: bg"};
  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h ?? "100%"};
  display: flex;
  align-items: ${({ aln }) => (aln ? "flex-start" : "center")};
  
  justify-content: space-around;
  flex-direction: ${({ dir }) => (dir ? "column" : "row")};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CustomText = styled.Text`
  color: black;
  font-size: ${({ fs }) => fs ?? "12px"};
  font-weight: ${({ fw }) => fw ?? "normal"};
`;

export const CustomInputStyle = styled.TextInput`
  background-color: white; 
  height: 50px;
  width: 100%;
  padding: 10px;
  border: 1px solid;
`;
