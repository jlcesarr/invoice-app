import clsx from 'clsx';
import { InputHTMLAttributes, useContext } from 'react';
import { FieldContext } from '../../../context/FieldProvider';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Input({ className, ...inputProps }: InputProps) {
  const { currentValue, onChange } = useContext(FieldContext);

  return (
    <input
      type="text"
      className={clsx(
        'focus:border-violet-primary bg-[#FFF] border-[1px] border-[#DFE3FA] outline-none font-spartan-bold text-black-primary rounded  text-sm leading-[15px] tracking-[-0.25px] pl-5 py-4 min-w-[240px] h-[48px]',
        className
      )}
      onChange={({ target }) => onChange(target.value)}
      defaultValue={currentValue}
      {...inputProps}
    />
  );
}

Input.displayName = 'Field.Text';

export { Input };
