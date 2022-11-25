import clsx from 'clsx';

export interface TextProps {
  size: 'lg' | 'sm';
  children: string;
  className: string;
}

function Text({ size = 'lg', children, className }: TextProps) {
  return (
    <p
      className={clsx(
        'font-spartan-medium text-black-primary',
        {
          'text-sm leading-[15px] tracking-[-0.25px]': size == 'lg',
          'text-xs leading-[18px] tracking-[-0.23px]': size == 'sm'
        },
        className
      )}
    >
      {children}
    </p>
  );
}

export { Text };
