import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { FieldContext } from '../../../context/FieldProvider';
import { Heading } from '../../Heading';

export interface SelectProps {
  options: string[];
  handleToggle?: () => void;
}

function Select({ options, handleToggle }: SelectProps) {
  const { currentValue, onChange } = useContext(FieldContext);

  function handleOptionChoice(option: string) {
    onChange?.(option);
    handleToggle?.();
  }

  return (
    <div className="flex flex-col gap-2 py-4 bg-[#FFF] rounded-[8px]">
      {options?.length > 0
        ? options.map((option, index) => (
            <div key={index}>
              <button
                type="button"
                className={clsx('w-full py-1')}
                onClick={() => handleOptionChoice(option)}
                aria-label="Select Option"
              >
                <Heading
                  size="sm"
                  className={clsx('text-left  ml-6 ', {
                    'text-violet-primary': option === currentValue
                  })}
                >
                  {option}
                </Heading>
              </button>
              {index < options.length - 1 && (
                <div className="h-[1px] w-full my-3 bg-lavender-primary"></div>
              )}
            </div>
          ))
        : null}
    </div>
  );
}

Select.displayName = 'Field.Select';

export { Select };
