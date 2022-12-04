import { ReactElement, LabelHTMLAttributes, cloneElement } from 'react';
import clsx from 'clsx';
import { DatePicker } from './DatePicker';
import { Select } from './Select';
import { Input } from './Input';

import { useToggle } from '../../hooks/useToggle';

export interface FieldRootProps {
  children: JSX.Element;
}

function FieldRoot({ children }: FieldRootProps) {
  return (
    <div className="font-spartan-bold text-black-primary text-sm leading-[15px] tracking-[-0.25px] flex flex-col gap-3">
      {children}
    </div>
  );
}

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: string;
}

function FieldLabel({ children, className, ...labelProps }: FieldLabelProps) {
  return (
    <label
      className={clsx(
        'text-ube-primary font-spartan-medium text-sm leading-[15px] tracking-[-0.25px]',
        className
      )}
      {...labelProps}
    >
      {children}
    </label>
  );
}

export interface FieldWrapperProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

function FieldWrapper({ children, className }: FieldWrapperProps) {
  return (
    <div className={clsx('flex flex-col gap-[16px] cursor-pointer', className)}>
      {children}
    </div>
  );
}

interface FieldDropdownProps {
  text: string;
  children: ReactElement;
  icon?: ReactElement;
  className?: string;
}

function FieldDropdown({
  text,
  icon,
  children,
  className
}: FieldDropdownProps) {
  const [isOpen, handleToggle] = useToggle();

  const DropdownContent = () =>
    cloneElement(children, {
      handleToggle
    });

  return (
    <>
      <div
        className={clsx(
          'box-border flex justify-between items-center w-full bg-[#FFF] border-[1px] border-[#DFE3FA] px-5 py-4 rounded hover:border-violet-primary transition-all  h-[48px]',
          {
            'border-violet-primary': isOpen
          },
          className
        )}
        onClick={handleToggle}
      >
        <span className="select-none">{text}</span>
        <div className="flex-grow-1 box-border">{icon}</div>
      </div>

      {isOpen && (
        <div className="bg-[#FFF] rounded-[8px] shadow-dropdown">
          <DropdownContent />
        </div>
      )}
    </>
  );
}

FieldRoot.displayName = 'Field.Root';
FieldWrapper.displayName = 'Field.Wrapper';
FieldLabel.displayName = 'Field.Label';
FieldDropdown.displayName = 'Field.Dropdown';

export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Wrapper: FieldWrapper,
  Dropdown: FieldDropdown,
  DatePicker,
  Input,
  Select
};
