import { Select, SelectProps } from '.';
import { Meta } from '@storybook/react';
import { FieldDecorator } from '../../../../.storybook/decorators/FieldDecorator';
import { Field } from '..';

const exampleOptions = ['Option 1', 'Option 2', 'Option 3'];

export default {
  name: 'Select Field',
  component: Select,
  args: {
    options: exampleOptions
  },
  decorators: [FieldDecorator, (Story) => <Field.Root>{Story()}</Field.Root>],
  argTypes: {
    options: {
      description: 'Options to select',
      control: {
        type: 'array'
      }
    }
  }
} as Meta<SelectProps>;

export const Default = {};
