import { Text, TextProps } from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Body Text'
  },
  argTypes: {
    size: {
      description: 'Size of body text',
      control: 'select',
      options: ['lg', 'sm'],
    },
    children:
    {
      type: {
        name: 'string'
      }
    }
  },

} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  name: 'Large',
  args: {
    size: 'lg'
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
};


