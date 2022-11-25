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

export const PrimaryHovered: StoryObj<ButtonRootProps> = {
  name: 'Primary Hovered',
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
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const SecondaryLight: StoryObj<ButtonRootProps> = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    children: 'Button'
  }
};

export const SecondaryLightHovered: StoryObj<ButtonRootProps> = {
  name: 'Secondary Hovered',
  args: {
    variant: 'secondary',
    children: 'Button'
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const TertiaryLight: StoryObj<ButtonRootProps> = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    children: 'Button'
  }
};

export const TertiaryLightHovered: StoryObj<ButtonRootProps> = {
  name: 'Tertiary Hovered',
  args: {
    variant: 'tertiary',
    children: 'Button'
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const Quaternary: StoryObj<ButtonRootProps> = {
  name: 'Quaternary',
  args: {
    variant: 'quaternary',
    children: 'Button'
  }
};

export const QuaternaryLightHovered: StoryObj<ButtonRootProps> = {
  name: 'Quaternary Hovered',
  args: {
    variant: 'quaternary',
    children: 'Button'
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const Quinary: StoryObj<ButtonRootProps> = {
  name: 'Quinary',
  args: {
    variant: 'quinary',
    children: 'Button'
  }
};

export const QuinaryLightHovered: StoryObj<ButtonRootProps> = {
  name: 'Quinary Hovered',
  args: {
    variant: 'quinary',
    children: 'Button'
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const WithIcon: StoryObj<ButtonRootProps> = {
  name: 'With Icon',
  args: {
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
