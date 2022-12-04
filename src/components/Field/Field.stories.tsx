import { Field, FieldRootProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { CalendarIcon } from '../Icons/CalendarIcon';

import { FieldDecorator } from '../../../.storybook/decorators/FieldDecorator';

const optionsMock = ['Option 1', 'Option 2', 'Option 3'];

export default {
  title: 'Components/Field',
  name: 'Root',
  component: Field.Root,
  decorators: [FieldDecorator],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  subcomponents: {
    Root: Field.Root,
    Label: Field.Label,
    Wrapper: Field.Wrapper,
    Dropdown: Field.Dropdown
  }
} as Meta<FieldRootProps>;

export const Default: StoryObj<FieldRootProps> = {};

export const DatePicker: StoryObj<FieldRootProps> = {
  name: 'Date Picker Field',
  args: {
    children: (
      <Field.Wrapper>
        <Field.Label>Label</Field.Label>
        <Field.Dropdown text="Date Picker" icon={<CalendarIcon />}>
          <Field.DatePicker />
        </Field.Dropdown>
      </Field.Wrapper>
    )
  }
};

export const Select: StoryObj<FieldRootProps> = {
  name: 'Select Field',
  story: DatePicker,
  args: {
    children: (
      <Field.Wrapper>
        <Field.Label>Label</Field.Label>
        <Field.Dropdown text="Select" icon={<ArrowDownIcon />}>
          <Field.Select options={optionsMock} />
        </Field.Dropdown>
      </Field.Wrapper>
    )
  }
};
export const Hover: StoryObj<FieldRootProps> = {
  args: {
    children: (
      <div className="grid grid-cols-3 gap-2 ">
        <Field.Input />

        <Field.Wrapper>
          <Field.Dropdown text="Date Picker" icon={<ArrowDownIcon />}>
            <Field.DatePicker />
          </Field.Dropdown>
        </Field.Wrapper>

        <Field.Wrapper>
          <Field.Dropdown text="Select" icon={<ArrowDownIcon />}>
            <Field.Select options={optionsMock} />
          </Field.Dropdown>
        </Field.Wrapper>
      </div>
    )
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
