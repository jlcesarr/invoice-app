import clsx from 'clsx';

export interface HeadingProps {
  size: 'xl' | 'lg' | 'md' | 'sm';
  children: string;
  className?: string;
}

function Heading({ size = 'xl', children, className }: HeadingProps) {
  const HeadingType = (size == 'xl' && 'h1') || (size == 'lg' && 'h2') || 'h3';
  return (
    <HeadingType
      className={clsx(
        'font-spartan-bold text-black-primary',
        {
          'text-xl leading-[36px] tracking-[-1px]': size === 'xl',
          'text-lg leading-[22px] tracking-[-0.63px]': size === 'lg',
          'text-md leading-[24px] tracking-[-0.8px]': size === 'md',
          'text-sm leading-[15px] tracking-[-0.25px]': size === 'sm'
        },
        className
      )}
    >
      {children}
    </HeadingType>
  );
}

export { Heading };
