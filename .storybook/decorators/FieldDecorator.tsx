import React, { useState } from 'react';
import { DecoratorFn } from '@storybook/react';

import { FieldProvider } from '../../src/context/FieldProvider';

const FieldDecorator: DecoratorFn = (Story, Context) => {
  const [value, setValue] = useState<string>();

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <FieldProvider
      value={{
        onChange: handleChange,
        currentValue: value
      }}
    >
      {Story()}
    </FieldProvider>
  );
};

export { FieldDecorator };
