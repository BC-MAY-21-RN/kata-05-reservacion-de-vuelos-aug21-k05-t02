import React, {useState} from 'react';
import { FlexContainer, CustomText } from '..'
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../../library/constants';


export const CheckBoxComponent = ({text}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <FlexContainer h="20px" jc="flex-start">
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
            tintColors={{ true: colors.blue_c, false: colors.black }}
          />
          <CustomText clr={colors.gray} fs="16px">{text}</CustomText>
        </FlexContainer>
    )
}


