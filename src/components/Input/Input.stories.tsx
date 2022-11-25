import { Input, InputRootProps } from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input.Root,
  args: {
    children: (
      <>
        <Input.Label>Label</Input.Label>
        <Input.TextField />
        <Input.DropdownField options={['Net 30 Days', 'Net 15 Days']} />
      </>
    )
  }
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {
  name: 'Text Field',
  args: {
    children: (
      <>
        <Input.Label>Text Field</Input.Label>
        <Input.TextField />
      </>
    )
  }
};

export const Dropdown: StoryObj<InputRootProps> = {
  name: 'Dropdown Field',
  args: {
    children: (
      <>
        <Input.Label>Dropdown Field</Input.Label>
        <Input.DropdownField options={['Item 1', 'Item 2', 'Item 3']} />
      </>
    )
  }
};
