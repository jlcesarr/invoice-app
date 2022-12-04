import { useContext } from 'react';
import clsx from 'clsx';
import {
  DayPicker,
  SelectSingleEventHandler,
  ClassNames,
  ModifiersClassNames,
  useNavigation
} from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

import { ArrowLeftIcon } from '../../Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon';
import { Heading } from '../../Heading';

import DateProvider from '../../../providers/DateProvider/implementations/DateFNSDateProvider';
import { FieldContext } from '../../../context/FieldProvider';

const customElementsClassNames: ClassNames = {
  ...styles,
  root: clsx(styles.root, '!bg-[#FFF] rounded-[8px] !p-4 !m-0 w-full grow'),
  day: clsx(
    styles.day,
    '!text-sm !leading-[15px] !tracking-[-0.25px] !text-red'
  ),
  button: clsx(styles.button, 'hover:!bg-[transparent]')
};

const customModifiersClassNames: ModifiersClassNames = {
  ...styles,
  selected: '!text-violet-primary',
  outside: '!text-black-primary'
};

function CustomCaption() {
  const { goToMonth, nextMonth, previousMonth, currentMonth } = useNavigation();

  return (
    <div className="flex items-center justify-between mb-8">
      <button
        className="grow flex items-center justify-start p-2"
        disabled={!previousMonth}
        onClick={() => goToMonth(previousMonth as Date)}
      >
        <ArrowLeftIcon />
      </button>
      <Heading size="sm">
        {DateProvider.toFormat(currentMonth, 'MMM yyyy')}
      </Heading>
      <button
        className="grow flex items-center justify-end p-2"
        disabled={!nextMonth}
        onClick={() => goToMonth(nextMonth as Date)}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export interface DatePickerProps {
  handleToggle?: () => void;
}

function DatePicker({ handleToggle }: DatePickerProps) {
  const { currentValue, onChange } = useContext(FieldContext);

  const handleDateChoice: SelectSingleEventHandler = (day): void => {
    onChange(day?.toString() as string);
    handleToggle?.();
  };

  return (
    <DayPicker
      hideHead={true}
      mode="single"
      selected={new Date(currentValue)}
      fromDate={new Date()}
      locale={DateProvider.locales.enUS}
      classNames={customElementsClassNames}
      modifiersClassNames={customModifiersClassNames}
      showOutsideDays
      onSelect={handleDateChoice}
      components={{
        Caption: CustomCaption
      }}
    />
  );
}

DatePicker.displayName = 'Field.DatePicker';

export { DatePicker };
