import { DatePicker, DatePickerProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { FieldDecorator } from '../../../../.storybook/decorators/FieldDecorator';
import { Field } from '..';

export default {
  name: 'DatePicker Field',
  component: DatePicker,
  decorators: [FieldDecorator, (Story) => <Field.Root>{Story()}</Field.Root>],
  argTypes: {}
} as Meta<DatePickerProps>;

export const Default: StoryObj<DatePickerProps> = {};
