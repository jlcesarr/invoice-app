import {
  useState,
  LabelHTMLAttributes,
  ReactElement,
  useMemo,
  SyntheticEvent
} from 'react';
import clsx from 'clsx';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { Heading } from '../Heading';

export interface InputRootProps {
  children: ReactElement;
}

function InputRoot({ children }: InputRootProps) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

InputRoot.displayName = 'Input.Root';

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}

function InputLabel({ children, ...labelProps }: InputLabelProps) {
  return (
    <label
      className="text-ube-primary font-spartan-medium text-sm leading-[15px] tracking-[-0.25px] "
      {...labelProps}
    >
      {children}
    </label>
  );
}

InputLabel.displayName = 'Input.Label';

interface InputsProps {
  className?: string;
}

interface InputTextField extends InputsProps {
  ref?: any;
}

function InputTextField({ className }: InputTextField) {
  const stylingClasses = useMemo(
    () =>
      clsx(
        'focus:border-violet-primary bg-[#FFF] border-[1px] border-[#DFE3FA] outline-none font-spartan-bold text-black-primary rounded  text-sm leading-[15px] tracking-[-0.25px] pl-5 py-4 ',
        className
      ),
    [className]
  );

  return <input type="text" className={stylingClasses} />;
}

interface InputDropdownFieldProps extends InputsProps {
  ref?: any;
  options: string[];
}

function InputDropdownField({ className, options }: InputDropdownFieldProps) {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const stylingClasses = useMemo(
    () =>
      clsx(
        'font-spartan-bold text-black-primary text-sm leading-[15px] tracking-[-0.25px] flex flex-col gap-[16px]',
        className
      ),
    [className]
  );

  function handleToggle(ev: SyntheticEvent<HTMLDivElement>) {
    if (ev.currentTarget?.dataset?.toggler && !isOpen) {
      setIsOpen((prevState) => !prevState);
    }
  }

  function handleOptionChoice(option: string) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  if (options.length <= 0) {
    return null;
  }

  return (
    <div className={stylingClasses} data-toggler="1" onClick={handleToggle}>
      <div
        className={clsx(
          'box-border flex justify-between items-center w-full bg-[#FFF] border-[1px] border-[#DFE3FA] px-5 py-4 rounded',
          { 'border-violet-primary': isOpen || selectedOption }
        )}
      >
        <span className="read-only">{selectedOption || options[0]}</span>
        <div className="cursor-pointer flex-grow-1 box-border">
          <ArrowDownIcon />
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-2 py-4 bg-[#FFF] rounded-[8px] shadow-dropdown">
          {options.map((option, index) => (
            <>
              <button
                type="button"
                className={clsx('w-full py-1')}
                onClick={(_) => handleOptionChoice(option)}
                key={`${index}_option`}
              >
                <Heading
                  size="sm"
                  className={clsx('text-left  ml-6 ', {
                    'text-violet-primary': selectedOption === option
                  })}
                >
                  {option}
                </Heading>
              </button>
              {index < options.length - 1 && (
                <div
                  key={`${index}_divider`}
                  className="h-[1px] w-full my-3 bg-lavender-primary"
                ></div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}

InputDropdownField.displayName = 'Input.DropdownField';

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  TextField: InputTextField,
  DropdownField: InputDropdownField
};
