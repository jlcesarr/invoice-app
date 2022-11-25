import { Heading, HeadingProps } from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading Text',
    size: 'xl'
  },

  argTypes: {
    size: {
      description: 'Size of heading text',
      control: {
        type: 'select'
      },
      options: ['xl', 'lg', 'md', 'sm']
    }
  }
} as Meta<HeadingProps>;

export const Default = {
  name: 'Extra Large',
  args: {
    size: 'xl'
  }
};
export const Large = {
  name: 'Large',
  args: {
    size: 'lg'
  }
};

export const Medium = {
  name: 'Medium',
  args: {
    size: 'md'
  }
};

export const Small = {
  name: 'Small',
  args: {
    size: 'sm'
  }
};
