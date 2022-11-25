import clsx from 'clsx';

export interface TextProps {
  size: 'lg' | 'sm';
  children: string;
}

function Text({ size = 'lg', children }: TextProps) {
  return (
    <p
      className={clsx('font-spartan-medium text-black-primary', {
        'text-sm leading-[15px] tracking-[-0.25px]': size == 'lg',
        'text-xs leading-[18px] tracking-[-0.23px]': size == 'sm'
      })}
    >
      {children}
    </p>
  );
}

export { Text };
