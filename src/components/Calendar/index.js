import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlexContainer} from '..';
import {colors} from '../../library/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Calendar = ({dateSelected, setDateSelected}) => {
  
  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setDateSelected({...dateSelected, endDate: date});
    } else {
      setDateSelected({startDate: date, endDate: null});
    }
  };
  const minDate = new Date(); // Today
  const maxDate = new Date(2022, 11, 31);
  const startDate = dateSelected.startDate
    ? dateSelected.startDate.toString()
    : '';
  const endDate = dateSelected.endDate ? dateSelected.endDate.toString() : '';

  return (
    <SafeAreaView>
      <FlexContainer h="85%">
        <CalendarPicker
          todayBackgroundColor={colors.blue_c}
          selectedDayColor={colors.blue}
          selectedDayTextColor={colors.white}
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          onDateChange={onDateChange}
          previousComponent={<FontAwesome name="angle-left" size={60} color={colors.blue_c} />}
          nextComponent={<FontAwesome name="angle-right" size={60} color={colors.blue_c} />}
          />
      </FlexContainer>
    </SafeAreaView>
  );
};
