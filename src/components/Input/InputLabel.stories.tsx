import { Meta } from '@storybook/react';
import { Input, InputLabelProps } from '.';

export default {
  title: 'Components/Input/Label',
  component: Input.Label,
  args: {
    children: 'Text'
  },
  argTypes: {
    children: {
      name: 'Text',
      type: {
        name: 'string',
        required: true
      }
    }
  }
} as Meta<InputLabelProps>;

export const Default = {};
