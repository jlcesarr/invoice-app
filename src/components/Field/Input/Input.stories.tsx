import { Input, InputProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { FieldDecorator } from '../../../../.storybook/decorators/FieldDecorator';
import { Field } from '..';

export default {
  name: 'Input Field',
  component: Input,
  args: {
    placeholder: 'Lorem ipsum dolor sit amet.'
  },
  decorators: [FieldDecorator, (Story) => <Field.Root>{Story()}</Field.Root>]
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
