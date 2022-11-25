import { Button, ButtonRootProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '../Icons/PlusIcon';

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: 'Button'
  },
  argTypes: {
    variant: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary']
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonRootProps>;

export const Default: StoryObj<ButtonRootProps> = {
  name: 'Primary'
};

export const WithIcon: StoryObj<ButtonRootProps> = {
  name: 'With Icon',
  args: {
    variant: 'primary',
    children: (
      <>
        <Button.IconWrapper>
          <PlusIcon />
        </Button.IconWrapper>
        New Invoice
      </>
    )
  }
};

export const SecondaryLight: StoryObj<ButtonRootProps> = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    children: 'Button'
  }
};

export const TertiaryLight: StoryObj<ButtonRootProps> = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    children: 'Button'
  }
};

export const Quaternary: StoryObj<ButtonRootProps> = {
  name: 'Quaternary',
  args: {
    variant: 'quaternary',
    children: 'Button'
  }
};

export const Quinary: StoryObj<ButtonRootProps> = {
  name: 'Quinary',
  args: {
    variant: 'quinary',
    children: 'Button'
  }
};
