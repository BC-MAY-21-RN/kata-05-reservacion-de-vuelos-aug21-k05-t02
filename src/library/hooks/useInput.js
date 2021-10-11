import {useState} from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = text => {
    setValue(text);
  };

  return {
    value,
    onChangeText: handleChange,
  };
};
